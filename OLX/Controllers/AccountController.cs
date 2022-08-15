using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using System.Threading.Tasks;
using OLX.Entities;
using OLX.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using OLX.Helpers;
using Microsoft.Extensions.Configuration;
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using OLX.Models;
using System.Net;
using OLX.Abstract;
using OLX.Interfaces;
using OLX.DTO.Account;
using Microsoft.Extensions.Options;
using Google.Apis.Auth;
using System.Security.Claims;

namespace OLX.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly EFDbContext _context;
        private readonly UserManager<DbUser> _userManager;
        private readonly SignInManager<DbUser> _signInManager;
        private readonly IConfiguration _configuration;
        private readonly IMapper _mapper;
        private readonly IEmailSender _emailSender;
        private readonly IOptions<GoogleAuthSettings> _googleAuthSettings;
        private static string _userName;

        public AccountController(EFDbContext context,
         UserManager<DbUser> userManager,
         SignInManager<DbUser> signInManager,
         IOptions<GoogleAuthSettings> googleAuthSettings,
         IConfiguration configuration, IMapper mapper, IEmailSender emailSender)
        {
            _userManager = userManager;
            _context = context;
            _signInManager = signInManager;
            _configuration = configuration;
            _mapper = mapper;
            _emailSender = emailSender;
            _googleAuthSettings = googleAuthSettings;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginViewModel model)
        {
            if (!ModelState.IsValid)
            {
                var errors = CustomValidator.GetErrorsByModel(ModelState);
                return BadRequest(
                   new
                   {
                       status = 400,
                       errors = new { invalid = "Щось пішло не так!" }
                   });
            }

            var result = await _signInManager
                .PasswordSignInAsync(model.Email, model.Password,
                false, false);

            if (!result.Succeeded)
            {
                return BadRequest(
                    new
                    {
                        status = 400,
                        errors = new { invalid = "Не правильно введені дані!" }
                    });
            }

            var user = await _userManager.FindByEmailAsync(model.Email);
            await _signInManager.SignInAsync(user, isPersistent: false);

            return Ok(
            new
            {
                token = CreateTokenJwt(user)
            });
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterViewModel model)
        {
            if (!ModelState.IsValid)
            {
                var errors = CustomValidator.GetErrorsByModel(ModelState);
                //return BadRequest(errors);
                return BadRequest(
                    new
                    {
                        status = 400,
                        errors = new { password = "Пароль має містити цифри, маленькі і великі латинські букви!" }
                    });
            }

            var user = new DbUser
            {
                UserName = model.Email,
                Email = model.Email
            };

            var result = await _userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
            {
                //return BadRequest(result.Errors);
                return BadRequest(
                    new
                    {
                        status = 400,
                        errors = new { password = "Такий користувач вже існує" }
                    });
            }

            await _signInManager.SignInAsync(user, isPersistent: false);

            return Ok(
            new
            {
                token = CreateTokenJwt(user)
            });
        }

        [HttpPost("GoogleExternalLogin")]
        public async Task<IActionResult> GoogleExternalLoginAsync([FromBody] ExternalLoginDTO request)
        {
            var payload = await VerifyGoogleToken(request);
            if (payload == null)
            {
                return BadRequest(new
                {
                    error = "Щось пішло не так!"
                });
            }
            var info = new UserLoginInfo(request.Provider, payload.Subject, request.Provider);
            var user = await _userManager.FindByLoginAsync(info.LoginProvider, info.ProviderKey);

            if (user == null)
            {
                user = await _userManager.FindByEmailAsync(payload.Email);

                if (user == null)
                {
                    user = new DbUser
                    {
                        Email = payload.Email,
                        UserName = payload.Email
                    };
                    var resultCreate = await _userManager.CreateAsync(user);
                    if (!resultCreate.Succeeded)
                    {
                        return BadRequest(new { error = "Щось пішло не так!" });
                    }
                }

                //var resultAddLogin = await _userManager.AddLoginAsync(user, info);
                //if (!resultAddLogin.Succeeded)
                //{
                //    return BadRequest(new { error = "Щось пішло не так!" });
                //}
            }

            string token = CreateTokenJwt(user);
            return Ok(
                new { token }
            );
        }

        [HttpGet]
        [Route("profile")]
        public async Task<IActionResult> UserProfile()
        {
            try
            {
                //Thread.Sleep(2000);
                string userName = _userName;
                var user = await _userManager.FindByNameAsync(userName);
                var model = _mapper.Map<ProfileViewModel>(user);

                return Ok(model);
            }
            catch (Exception ex)
            {
                return NotFound(new
                {
                    invalid = ex.Message
                });
            }
        }

        private async Task<GoogleJsonWebSignature.Payload> VerifyGoogleToken(ExternalLoginDTO request)
        {
            var settings = new GoogleJsonWebSignature.ValidationSettings()
            {
                Audience = new List<string>() { _googleAuthSettings.Value.ClientId }
            };

            var payload = await GoogleJsonWebSignature.ValidateAsync(request.Token, settings);
            return payload;
        }

        [Route("all")]
        [HttpGet]
        public IActionResult GetUsers()
        {
            var list = _context.Users
                .Select(x => _mapper.Map<UserItemViewModel>(x))
                .ToList();
            return Ok(list);
        }

        private string CreateTokenJwt(DbUser user)
        {
            var roles = _userManager.GetRolesAsync(user).Result;
            var claims = new List<Claim>()
            {
                //new Claim("id", user.Id.ToString()),
                new Claim("name", user.UserName)
            };
            _userName = user.UserName;

            foreach (var role in roles)
            {
                claims.Add(new Claim("roles", role));
            }

            var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("11-sdfasdf-22233222222"));
            var signingCredentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);
            var jwt = new JwtSecurityToken(
                signingCredentials: signingCredentials,
                claims: claims,
                expires: DateTime.Now.AddHours(1));

            return new JwtSecurityTokenHandler().WriteToken(jwt);
        }
        [HttpPost("forgotPassword")]
        public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordModel forgotPasswordModel)
        {
            var user = await _userManager.FindByEmailAsync(forgotPasswordModel.Email);
            if (user == null)
                return BadRequest("Not found user");
            var token = await _userManager.GeneratePasswordResetTokenAsync(user);

            var frontEndURL = _configuration.GetValue<string>("FrontEndURL");

            var callbackUrl =
                $"{frontEndURL}/resetpassword?userId={user.Id}&" +
                $"code={WebUtility.UrlEncode(token)}";

            //Url.Action(nameof(ResetPassword), "AccountController", new { token, email = user.Email }, Request.Scheme);
            var message = new Message(new string[] { forgotPasswordModel.Email }, "Reset password token",
                $"Please reset password by clicking here: " +
               $"<a href='{callbackUrl}'>Відновити</a>");
            _emailSender.SendEmail(message);

            return Ok();
        }

        [HttpPost("changePassword")]
        public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordViewModel model)
        {
            var user = await _userManager.FindByIdAsync(model.UserId);
            var res = await _userManager.ResetPasswordAsync(user, model.Token, model.Password);
            return Ok();
        }
    }
}
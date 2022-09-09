using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using OLX.Entities;
using System.Threading.Tasks;
using System.Linq;
using OLX.Models;
using System;
using System.Collections.Generic;
using OLX.ViewModels;


namespace OLX.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BasketController : Controller
    {
        private readonly EFDbContext _context;
        private readonly UserManager<DbUser> _userManager;
        private readonly IMapper _mapper;
        private List<AdvertisementItemViewModel> like;


        public BasketController(EFDbContext context,
           IMapper mapper, UserManager<DbUser> userManager)
        {
            //Thread.Sleep(2000);
            _context = context;
            _mapper = mapper;
            _userManager = userManager;
            like = new List<AdvertisementItemViewModel>();
        }


        [Route("add/{id}")]
        [HttpPost]
        public async Task<IActionResult> Add(int id)
        {
            try
            {
                string userName = AccountController._userName;
                var user = await _userManager.FindByEmailAsync(userName);
                var cart = _context.Basket
                    .SingleOrDefault(x => x.UserId == user.Id && x.AdvId == id);
                if (cart == null)
                {
                    cart = new BasketEntity();
                    cart.AdvId = id;
                    cart.UserId = user.Id;
                    _context.Basket.Add(cart);
                    await _context.SaveChangesAsync();
                }

                var result = _context.Basket
                    .Include(x => x.Advertisement)
                    .Where(x => x.Id == cart.Id)
                    .Select(x => _mapper.Map<BasketItemViewModel>(x))
                    .First();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    invalid = ex.Message
                });
            }
        }

        [HttpGet]
        [Route("list")]
        public async Task<IActionResult> List()
        {
            try
            {
                //Thread.Sleep(2000);
                string userName = AccountController._userName;
                var user = await _userManager.FindByNameAsync(userName);
                var model = await _context.Basket
                    .Where(x => x.UserId == user.Id)
                    .Include(x => x.Advertisement)
                    .Select(x => _mapper.Map<BasketItemViewModel>(x)).ToListAsync();
                foreach (var item in model)
                {
                    var result = _context.Advertisement
                    .Where(x => x.Id == item.AdvId)
                    .Select(x => _mapper.Map<AdvertisementItemViewModel>(x))
                    .First();
                    like.Add(result);
                }

                return Ok(like);
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    invalid = ex.Message
                });
            }
        }

        [Route("delete/{id}")]
        [HttpDelete]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var cartItem = _context.Basket.SingleOrDefault(x => x.AdvId == id);
                if (cartItem == null)
                    return NotFound();
                _context.Basket.Remove(cartItem);
                await _context.SaveChangesAsync();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { invalid = "Something went wrong on server " + ex.Message });
            }
        }
    }
}

using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OLX.Entities;
using OLX.Models;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace OLX.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class OrdersController : Controller
    {
        private readonly EFDbContext _context;
        private readonly UserManager<DbUser> _userManager;
        private readonly IMapper _mapper;
        public OrdersController(EFDbContext context,
            UserManager<DbUser> userManager,
           IMapper mapper)
        {
            //Thread.Sleep(2000);
            _context = context;
            _mapper = mapper;
            _userManager = userManager;
        }

        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> Add([FromBody] OrderAddViewModel model)
        {
            try
            {
                string userName = User.Claims.FirstOrDefault().Value;
                var user = await _userManager.FindByEmailAsync(userName);

                var entity = _mapper.Map<OrderEntity>(model);
                entity.UserId = user.Id;
                _context.Orders.Add(entity);
                _context.SaveChanges();

                var entityItems = model.OrderItems.Select(x => _mapper.Map<OrderItemEntity>(x));
                foreach (var item in entityItems)
                {
                    item.OrderId = entity.Id;
                    _context.OrderItems.Add(item);
                }
                _context.SaveChanges();

                var cartData = _context.Carts.Where(x => x.UserId == user.Id).ToArray();
                _context.Carts.RemoveRange(cartData);
                _context.SaveChanges();
                return Ok();
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
                var model = await _context.Orders
                    .Include(x => x.OrderItems).ThenInclude(x => x.Advertisement)
                    .OrderByDescending(x => x.DateCreated)
                    .Select(x => _mapper.Map<OrderViewModel>(x))
                    .ToListAsync();
                return Ok(model);
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    invalid = ex.Message
                });
            }
        }
    }
}
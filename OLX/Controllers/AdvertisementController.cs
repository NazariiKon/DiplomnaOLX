using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OLX.Entities;
using OLX.Helpers;
using OLX.Models;
using OLX.ViewModels;
using System;
using System.Collections.Generic;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;

namespace OLX.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class AdvertisementController : Controller
    {
        private readonly IMapper _mapper;
        private readonly EFDbContext _context;
        private List<int> liked;
        private static int count = -4;
        public AdvertisementController(IMapper mapper, EFDbContext context)
        {
            _mapper = mapper;
            _context = context;
            liked = new List<int>();
        }

        [HttpPost("create")]
        [RequestSizeLimit(100 * 1024 * 1024)]     // set the maximum file size limit to 100 MB
        public IActionResult Create(CreateAdvertisementViewModel model)
        {
            var img = ImageWorker.FromBase64StringToImage(model.Image);
            string randomFilename = Path.GetRandomFileName() + ".jpeg";
            var dir = Path.Combine(Directory.GetCurrentDirectory(), "uploads", randomFilename);
            img.Save(dir, ImageFormat.Jpeg);

            AdvertisementEntity adv = _mapper.Map<AdvertisementEntity>(model); // мап моделі в оголошення
            adv.Image = randomFilename;
            _context.Advertisement.Add(adv);
            _context.SaveChanges();

            return Ok(new { id = adv.Id }); // вертає айдішку
        }

        [HttpGet("list")]
        public IActionResult Index() // вертає ліст продуктів з затримкой 2000
        {
            //Thread.Sleep(2000); 
            var list = _context.Advertisement
                    .Select(x => _mapper.Map<AdvertisementItemViewModel>(x))
                    .ToList();
            return Ok(list);
        }

        [HttpGet("vipList")]
        public IActionResult VipIndex() // вертає ліст продуктів з затримкой 2000
        {
            count += 4;
            if (count > _context.Advertisement.Count() - 4) count = 0;
            //Thread.Sleep(2000); 
            var list = _context.Advertisement
                    .Select(x => _mapper.Map<AdvertisementItemViewModel>(x))
                    .Skip(count)
                    .Take(4)
                    .ToList();
            return Ok(list);
        }

        [HttpGet("vipListBack")]
        public IActionResult VipIndexBack() // вертає ліст продуктів з затримкой 2000
        {
            count -= 4;
            if (count < 0) count = _context.Advertisement.Count() - 4;
            //Thread.Sleep(2000); 
            var list = _context.Advertisement
                    .Select(x => _mapper.Map<AdvertisementItemViewModel>(x))
                    .Skip(count)
                    .Take(4)
                    .ToList();
            return Ok(list);
        }

        [HttpPost("delete")]
        public IActionResult Delete(int id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var adv = _context.Advertisement.FirstOrDefault(m => m.Id == id);
            if (adv != null)
            {
                var img = Path.Combine(Directory.GetCurrentDirectory(), "uploads", adv.Image);
                System.IO.File.Delete(img);
                _context.Advertisement.Remove(adv);
                _context.SaveChanges();
            }
            return Ok();
        }

        [Route("getAdvByCategory/{id}")]
        [HttpGet]
        public IActionResult GetAdvByCategory(int id)
        {
            var list = _context.Advertisement
            .Where(x => x.Category.ParentId == id);

            list.Select(x => _mapper.Map<AdvertisementItemViewModel>(x)).ToList();
            return Ok(list);
        }

        [Route("getAdvBySubCategory/{id}")]
        [HttpGet]
        public IActionResult GetAdvBySubCategory(int id)
        {
            var list = _context.Advertisement
            .Where(x => x.CategoryId == id);
                
            list.Select(x => _mapper.Map<AdvertisementItemViewModel>(x)).ToList();
            return Ok(list);
        }

        [Route("getAdvByUser")]
        [HttpGet]
        public IActionResult GetAdvByUser()
        {
            var list = _context.Advertisement
            .Where(x => x.User.UserName == AccountController._userName);

            list.Select(x => _mapper.Map<AdvertisementItemViewModel>(x)).ToList();
            return Ok(list);
        }

        [Route("edit")]
        [HttpPost]
        public IActionResult Edit(EditAdvertisementViewModel model)
        {
            var adv = _context.Advertisement.FirstOrDefault(item => item.Id == model.Id);

            if (adv != null)
            {
                if (model.Image != null)
                {
                    var img = ImageWorker.FromBase64StringToImage(model.Image);
                    string filename = adv.Image;
                    var dir = Path.Combine(Directory.GetCurrentDirectory(), "uploads", filename);
                    img.Save(dir, ImageFormat.Jpeg);
                    //adv = _mapper.Map<AdvertisementEntity>(model); // мап моделі в оголошення
                    adv.Image = filename;
                }
                adv.Name = model.Name;
                adv.Price = Decimal.Parse(model.Price);
                //adv.Contacts = model.Contacts;
                //adv.Category = model.Category;
                adv.Description = model.Description;
                _context.SaveChanges();
            }
            return Ok(adv);
        }
    }
}

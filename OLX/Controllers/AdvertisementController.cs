using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OLX.Entities;
using OLX.Helpers;
using OLX.ViewModels;
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
        public AdvertisementController(IMapper mapper, EFDbContext context)
        {
            _mapper = mapper;
            _context = context;
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
    }
}

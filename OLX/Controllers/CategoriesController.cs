using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using OLX.Entities;
using OLX.Helpers;
using OLX.Models;
using System;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace OLX.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly EFDbContext _context;
        private readonly IMapper _mapper;
        private readonly IWebHostEnvironment _env;
        private readonly IConfiguration _configuration;

        public CategoriesController(EFDbContext context,
            IMapper mapper,
            IWebHostEnvironment env,
            IConfiguration configuration)
        {
            //Thread.Sleep(2000);
            _context = context;
            _mapper = mapper;
            _env = env;
            _configuration = configuration;
        }
        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> Add([FromBody] CategoryAddViewModel model)
        {
            try
            {
                string fileName = String.Empty;
                var entity = _mapper.Map<CategoryEntity>(model);

                if (model.Image != null)
                {
                    var img = ImageWorker.FromBase64StringToImage(model.Image);
                    string randomFilename = Path.GetRandomFileName() + ".jpeg";
                    var dir = Path.Combine(Directory.GetCurrentDirectory(), "uploads", randomFilename);
                    img.Save(dir, ImageFormat.Jpeg);

                    entity.Image = randomFilename;
                    //string randomFilename = Path.GetRandomFileName() +
                    //    Path.GetExtension(model.Image.FileName);

                    //string dirPath = Path.Combine(Directory.GetCurrentDirectory(), "images");
                    //fileName = Path.Combine(dirPath, randomFilename);
                    //using (var file = System.IO.File.Create(fileName))
                    //{
                    //    model.Image.CopyTo(file);
                    //}
                    //entity.Image = randomFilename;
                }
                //if (model.Image != null)
                //{
                //    string randomFilename = Path.GetRandomFileName() +
                //        ".jpeg";
                //    string pathSaveImages = InitStaticFiles
                //        .CreateImageByFileName(_env, _configuration,
                //            new string[] { "Folder" },
                //            randomFilename, model.Image, false, false);

                //    entity.Image = randomFilename;
                //}
                _context.Categories.Add(entity);
                await _context.SaveChangesAsync();
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
        [AllowAnonymous]
        [Route("list")]
        public async Task<IActionResult> List()
        {
            try
            {
                //Thread.Sleep(2000);
                var model = await _context.Categories
                    .Select(x => _mapper.Map<CategoryItemViewModel>(x))
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

        //[HttpGet]
        //[AllowAnonymous]
        //[Route("search")]
        //public async Task<IActionResult> Search([FromQuery] CategorySearchViewModel search)
        //{
        //    try
        //    {
        //        int page = search.Page;
        //        //Thread.Sleep(2000);
        //        int pageSize = 8;
        //        var query = _context.Categories.AsQueryable();
        //        if (!string.IsNullOrEmpty(search.Id))
        //        {
        //            int id = int.Parse(search.Id);
        //            query = query.Where(x => x.Id == id);
        //        }
        //        if (!string.IsNullOrEmpty(search.Title))
        //        {
        //            query = query.Where(x => x.Title.ToLower().Contains(search.Title.ToLower()));
        //        }
        //        if (!string.IsNullOrEmpty(search.Priority))
        //        {
        //            int priority = int.Parse(search.Priority);
        //            query = query.Where(x => x.Priority == priority);
        //        }
        //        var model = await query
        //            .Skip((page - 1) * pageSize)
        //            .Take(pageSize)
        //            .Select(x => _mapper.Map<CategoryItemViewModel>(x))
        //            .ToListAsync();
        //        int total = query.Count();
        //        int pages = (int)Math.Ceiling(total / (double)pageSize);
        //        return Ok(new CategorySearchResultViewModel
        //        {
        //            Categories = model,
        //            Total = total,
        //            CurrentPage = page,
        //            Pages = pages

        //        });
        //    }
        //    catch (Exception ex)
        //    {
        //        return BadRequest(new
        //        {
        //            invalid = ex.Message
        //        });
        //    }
        //}

        [Route("delete/{id}")]

        [HttpDelete]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            try
            {
                var entity = _context.Categories.SingleOrDefault(x => x.Id == id);
                if (entity == null)
                    return NotFound();

                if (entity.Image != null)
                {
                    var directory = Path.Combine(Directory.GetCurrentDirectory(), "uploads");
                    var FilePath = Path.Combine(directory, entity.Image);
                    System.IO.File.Delete(FilePath);
                }

                _context.Categories.Remove(entity);
                await _context.SaveChangesAsync();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { invalid = "Something went wrong on server " + ex.Message });
            }
        }

        [Route("get/{id}")]
        [HttpGet]
        [AllowAnonymous]
        public IActionResult GetCategoryById(int id)
        {
            var entity = _context.Categories
                .SingleOrDefault(x => x.Id == id);
            if (entity == null)
                return NotFound();
            return Ok(_mapper.Map<CategoryEditViewModel>(entity));
        }

        [HttpPut("edit")]
        public IActionResult Edit([FromBody] CategorySaveViewModel model)
        {
            try
            {
                var entity = _context.Categories
                    .SingleOrDefault(x => x.Id == model.Id);
                if (entity != null)
                {
                    entity.Title = model.Title;
                    string fileName = String.Empty;
                    if (model.Image != null)
                    {
                        string randomFilename = entity.Image;

                        string pathSaveImages = InitStaticFiles
                        .CreateImageByFileName(_env, _configuration,
                            new string[] { "Folder" },
                            randomFilename, model.Image, false, false);
                    }
                    _context.SaveChanges();
                    return Ok();
                }
                return NotFound();
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

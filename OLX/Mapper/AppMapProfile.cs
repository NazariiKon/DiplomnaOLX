using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OLX.Entities;
using OLX.ViewModels;
using System.Globalization;
using OLX.Models;

namespace OLX.Mapper
{
    public class AppMapProfile : Profile
    {
        public AppMapProfile()
        {
            var cultureInfo = new CultureInfo("uk-UA");
            //"23.9 - 12,5";

            CreateMap<DbUser, UserItemViewModel>();
            CreateMap<CreateAdvertisementViewModel, AdvertisementEntity>()
                .ForMember(x => x.Image, opt => opt.Ignore())
                .ForMember(x => x.DateCreated, opt => opt.MapFrom(x =>
                    DateTime.SpecifyKind(DateTime.Now, DateTimeKind.Utc)))

                .ForMember(x => x.Price, opt => opt.MapFrom(x =>
                       Decimal.Parse(x.Price, cultureInfo)));

            CreateMap<AdvertisementEntity, AdvertisementItemViewModel>()
               .ForMember(x => x.DateCreated, opt => opt.MapFrom(x =>
                    x.DateCreated.ToString("dd.MM.yyyy HH:mm:ss")))
               .ForMember(x => x.Price, opt => opt.MapFrom(x => Decimal.Round(x.Price).ToString(cultureInfo)));

            CreateMap<EditAdvertisementViewModel, AdvertisementEntity>()
                 .ForMember(x => x.Image, opt => opt.Ignore())
                 .ForMember(x => x.DateCreated, opt => opt.MapFrom(x =>
                     DateTime.SpecifyKind(DateTime.Now, DateTimeKind.Utc)));
        }
    }
}

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

            CreateMap<CategoryAddViewModel, CategoryEntity>()
             .ForMember(x => x.Image, opt => opt.Ignore());

            CreateMap<CategoryEntity, CategoryItemViewModel>()
               .ForMember(x => x.Image, opt => opt.MapFrom(x => x.Image));

            CreateMap<CategoryEntity, CategoryEditViewModel>()
                .ForMember(x => x.Image, opt => opt.MapFrom(x => x.Image));

            CreateMap<DbUser, ProfileViewModel>();

            CreateMap<CartAddViewModel, CartEntity>();

            CreateMap<CartEntity, CartItemViewModel>();

            CreateMap<BasketAddViewModel, BasketEntity>();

            CreateMap<BasketEntity, BasketItemViewModel>();

            CreateMap<OrderItemAddViewModel, OrderItemEntity>();

            CreateMap<OrderAddViewModel, OrderEntity>()
            .ForMember(x => x.DateCreated, opt => opt.MapFrom(x =>
                DateTime.SpecifyKind(DateTime.Now, DateTimeKind.Utc)))
            .ForMember(x => x.OrderItems, opt => opt.Ignore());

            //CreateMap<OrderItemEntity, OrderItemViewModel>()
            //    .ForMember(x => x.AdvName, opt => opt.MapFrom(x => x.Advertisement.Name))
            //    .ForMember(x => x.AdvImage, opt => opt.MapFrom(x => x.Advertisement.Image.Select()));

            //CreateMap<OrderEntity, OrderViewModel>()
            //    .ForMember(x => x.DateCreated, opt => opt.MapFrom(x => x.DateCreated.ToString("dd.MM.yyyy HH:mm:ss")))
            //    .ForMember(x => x.StatusName, opt => opt.MapFrom(x => x.OrderStatus.Name))
            //    .ForMember(x => x.Items, opt => opt.MapFrom(x => x.OrderItems));
        }
    }
}

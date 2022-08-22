using System;

namespace OLX.ViewModels
{
    public class AdvertisementItemViewModel // Оголошення
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Price { get; set; }
        public string Image { get; set; }
        public string DateCreated { get; set; }
        public string Description { get; set; }
        public int CategoryId { get; set; }
        public int UserId { get; set; }
        public string СreationTime { get; set; }
    }
}

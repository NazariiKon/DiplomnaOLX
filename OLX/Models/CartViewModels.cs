using Microsoft.AspNetCore.Mvc;
using OLX.ViewModels;

namespace OLX.Models
{
    public class CartAddViewModel
    {
        public int AdvId { get; set; }
    }

    public class CartEditViewModel
    {
        public int Id { get; set; }
    }

    public class CartItemViewModel
    {
        public int Id { get; set; }
        public int AdvId { get; set; }
    }
}

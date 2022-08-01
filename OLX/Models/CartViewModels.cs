using Microsoft.AspNetCore.Mvc;

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
        public string AdvName { get; set; }
        public decimal AdvPrice { get; set; }
    }
}

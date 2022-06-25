namespace OLX.Models
{
    public class CreateAdvertisementViewModel
    {
        public string Name { get; set; }
        public string Category { get; set; }
        public string Price { get; set; }
        public string Image { get; set; }
        public string Description { get; set; }
        public string Contacts { get; set; }
    }

    public class EditAdvertisementViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string Price { get; set; }
        public string Image { get; set; }
        public string Description { get; set; }
        public string Contacts { get; set; }
    }
}

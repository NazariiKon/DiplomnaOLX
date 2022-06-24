using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OLX.Entities
{
    [Table("tblAdvertisement")]
    public class AdvertisementEntity : BaseEntity<int>
    {
        [Required, StringLength(500)]
        public string Name { get; set; }
        [Required, StringLength(255)]
        public string Image { get; set; }
        public decimal Price { get; set; }
        [StringLength(4000)]
        public string Description { get; set; }
        [StringLength(255)]
        public string Category { get; set; }
        [StringLength(255)]
        public string Contacts { get; set; }
    }
}

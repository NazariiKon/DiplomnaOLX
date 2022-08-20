using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace OLX.Entities
{
    [Table("tblCategory")]
    public class CategoryEntity : BaseEntity<int>
    {
        public string Title { get; set; }
        public string? Image { get; set; }
        public int? ParentId { get; set; }
        public virtual CategoryEntity Parent { get; set; }
        public virtual ICollection<AdvertisementEntity> Advertisements { get; set; }
        public virtual ICollection<CategoryEntity> Children { get; set; }
    }
}
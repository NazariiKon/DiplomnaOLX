using System.ComponentModel.DataAnnotations.Schema;

namespace OLX.Entities
{
    [Table("tblBasketEntities")]
    public class BasketEntity : BaseEntity<int>
    {
        [ForeignKey("User")]
        public int UserId { get; set; }

        [ForeignKey("Advertisement")]
        public int AdvId { get; set; }

        public virtual DbUser? User { get; set; }
        public virtual AdvertisementEntity? Advertisement { get; set; }
    }
}

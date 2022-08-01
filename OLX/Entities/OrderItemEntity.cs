using System.ComponentModel.DataAnnotations.Schema;

namespace OLX.Entities
{
    [Table("tblOrderItemEntities")]
    public class OrderItemEntity : BaseEntity<int>
    {
        [ForeignKey("Order")]
        public int OrderId { get; set; }

        [ForeignKey("Advertisement")]
        public int AdvertisementId { get; set; }

        public decimal BuyPrice { get; set; }
        public virtual OrderEntity Order { get; set; }
        public virtual AdvertisementEntity Advertisement { get; set; }
    }
}
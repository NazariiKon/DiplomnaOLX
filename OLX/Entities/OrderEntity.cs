using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OLX.Entities
{
    [Table("tblOrderEntities")]
    public class OrderEntity : BaseEntity<int>
    {
        [ForeignKey("User")]
        public int UserId { get; set; }

        public virtual DbUser User { get; set; }
        public virtual ICollection<OrderItemEntity> OrderItems { get; set; }
    }
}
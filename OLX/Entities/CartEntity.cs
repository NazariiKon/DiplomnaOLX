using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OLX.Entities
{
    [Table("tblCartEntities")]
    public class CartEntity : BaseEntity<int>
    {
        [ForeignKey("User")]
        public int UserId { get; set; }

        [ForeignKey("Advertisement")]
        public int AdvId { get; set; }

        public virtual DbUser? User { get; set; }
        public virtual AdvertisementEntity? Advertisement { get; set; }
    }
}
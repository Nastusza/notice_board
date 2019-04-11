using System;
using System.ComponentModel.DataAnnotations;

namespace Infrastructure.Entities
{
    public class OfferEntity
    {
        [Key]
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal? Price { get; set; }
    }
}

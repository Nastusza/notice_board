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
        public double Lat { get; set; }
        public double Lng { get; set; }
        public DateTime CreationData { get; set; }
        public DateTime ExpirationDate { get; set; }
        public bool Negotiable { get; set; }
    }
}

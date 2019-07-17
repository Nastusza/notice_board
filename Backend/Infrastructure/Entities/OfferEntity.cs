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
<<<<<<< HEAD
        public decimal? Price { get; set; }
        public DateTime CreationData { get; set; }
        public DateTime ExpirationData { get; set; }
        public bool Negotiable { get; set; }
        public double latMin { get; set; }
        public double latMax { get; set; }
        public double lngMin { get; set; }
        public double lngMax { get; set; }
       
    }
}

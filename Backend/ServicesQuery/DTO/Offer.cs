using System;
using AutoMapper;
using Infrastructure.Entities;

namespace ServicesQueries.DTO
{
    public class Offer
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public DateTime CreationData { get; set; }
        public DateTime ExpirationDate { get; set; }
        public bool Negotiable { get; set; }
        public double latMin { get; set; }
        public double latMax { get; set; }
        public double lngMin { get; set; }
        public double lngMax { get; set; }

    }
}

    internal class OfferMappings : Profile
    {
        public OfferMappings()
        {
            CreateMap<OfferEntity, Offer>();
        }
    }



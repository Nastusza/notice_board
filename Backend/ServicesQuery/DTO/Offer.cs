using AutoMapper;
using Infrastructure.Entities;
using ServicesQueries.DTO;
using System;

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
        public LatLng LatLng { get; set; }
    }
}

internal class OfferMappings : Profile
{
    public OfferMappings()
    {
        CreateMap<OfferEntity, Offer>()
            .ForMember(x => x.LatLng, opt => opt.MapFrom(model => model));
        CreateMap<OfferEntity, LatLng>()
            .ForMember(x => x.Lat, opt => opt.MapFrom(model => model.Lat));
        CreateMap<OfferEntity, LatLng>()
            .ForMember(x => x.Lng, opt => opt.MapFrom(model => model.Lng));
    }
}



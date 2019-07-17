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
<<<<<<< HEAD
<<<<<<< HEAD
        public decimal? Price { get; set; }
=======
        public decimal Price { get; set; }
>>>>>>> 259871b327648976f2d67822e4bf12cc6466b45e
        public DateTime CreationData { get; set; }
        public DateTime ExpirationData { get; set; }
        public bool Negotiable { get; set; }
<<<<<<< HEAD
        public double latMin { get; set; }
        public double latMax { get; set; }
        public double lngMin { get; set; }
        public double lngMax { get; set; }

=======
 

=======
>>>>>>> 259871b327648976f2d67822e4bf12cc6466b45e
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



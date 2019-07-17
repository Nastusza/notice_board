using AutoMapper;

namespace ServicesQueries
{
    public class AutomapperConfig
    {
        public static void Configure()
        {
            Mapper.Initialize(x => { x.AddProfile<OfferMappings>(); });
        }
    }
}

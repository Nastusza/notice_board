using System;
using Infrastructure.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure
{
    public class TodoAroundDbContext : DbContext
    {
        public DbSet<OfferEntity> Offers { get; set; }

        public TodoAroundDbContext(DbContextOptions<TodoAroundDbContext> options) : base(options)
        {
            for (var i = 0; i < 10; i++)
            {
                Offers.Add(new OfferEntity()
                {
                    Description = $"Offer {i}",
                    Id = Guid.NewGuid(),
                    Price = i * 100,
                    Title = $"Title {i}",
                    UserId = Guid.Empty
                });
            }

            this.SaveChanges();
        }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);

            optionsBuilder
                .UseInMemoryDatabase("localDb")
                .UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
        }
    }
}

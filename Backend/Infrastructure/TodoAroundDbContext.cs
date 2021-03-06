﻿using System;
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
                    UserId = Guid.Empty,
<<<<<<< HEAD
                    CreationDate = DateTime.Now,
                    ExpirationDate = DateTime,
                    Negotiable = bool,
                    latMin = double,
                    latMax = double,
                    lngMin = double,
                    lngMax = double,
=======
                    Lat = i,
                    Lng = i,
                    CreationDate = DateTime.Now,
                    ExpirationDate = DateTime.Now.AddDays(7),
                    Negotiable = true
>>>>>>> 259871b327648976f2d67822e4bf12cc6466b45e
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

using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace ApiREST
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .ConfigureKestrel(options =>
                {
                    options.ListenAnyIP(5001, listenOptions =>
                    {
                        listenOptions.UseHttps("kestrel.pfx", "changeit");
                    });
                    options.ListenAnyIP(5000);
                })
                .UseStartup<Startup>();
    }
}

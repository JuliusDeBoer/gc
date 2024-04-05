using DVDApi.Models;
using Microsoft.EntityFrameworkCore;

namespace DVDApi.Db
{
    public class DVDContext(DbContextOptions<DVDContext> options) : DbContext(options)
    {
        public required DbSet<DVD> DVDs { get; set; }
        public required DbSet<Uitgever> Uitgevers { get; set; }
    }
}

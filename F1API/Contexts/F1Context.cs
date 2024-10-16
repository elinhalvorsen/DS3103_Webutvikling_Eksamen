namespace F1API.Contexts;
using F1API.Models;
using Microsoft.EntityFrameworkCore;

//Det er her databasene blir lagret. Driver, Race og Team.
public class F1Context : DbContext
{
    public F1Context(DbContextOptions<F1Context>options):base(options){}

    // Her er Driver tabellen
    public DbSet<Driver> Drivers {get; set;}
    // Her er Race tabellen
    public DbSet<Race> Races {get; set;}

    // Her er Team tabellen
    public DbSet<Team> Teams {get; set;}
}

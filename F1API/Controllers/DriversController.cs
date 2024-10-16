// henviser til slideserie: CRUD-fra-frontend-til-backend.pdf og tilhørende forelesninger.
namespace F1API.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using F1API.Contexts;
using F1API.Models;

// Håndterer alle CRUD operasjoner mot databasen.
[ApiController]
[Route("api/[controller]")]

public class DriversController : ControllerBase
{
    private readonly F1Context context;
    public DriversController(F1Context _context)
    {
        context = _context;
    }

    // Henter alle førere.
    [HttpGet]
    public async Task<ActionResult<Driver>> Get()
    {
        try
        {
            List<Driver> drivers = await context.Drivers.ToListAsync();
            if(drivers != null)
            {
                return Ok(drivers);
            }
            else
            {
                return NotFound();
            }
        } 
        catch
        {
            return StatusCode(500);
        }
    }
    
    // Henter fører etter id.
    [HttpGet("{id}")]
    public async Task<ActionResult<Driver>> Get(int id)
    {
        try
        {
            Driver? drivers = await context.Drivers.FindAsync(id);
            if( drivers != null )
            {
                return Ok(drivers);
            } 
            else
            {
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }
    
    // Henter fører etter navn.
    [HttpGet]
    // getbyname istedenfor drivers i routingen.
    [Route("[action]/{name}")]
    public async Task<ActionResult<Driver>> GetByName(string name)
    {
        try
        {
            List <Driver> drivers = await context.Drivers.Where(d => d.Name == name).ToListAsync();
            if(drivers != null)
            {
                return Ok(drivers);
            }
            else
            {
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }

    // Legger til en ny fører i databasen.
    [HttpPost]
    public async Task<ActionResult<Driver>> Post(Driver newDriver)
    {
        try
        {
            context.Drivers.Add(newDriver);
            await context.SaveChangesAsync();
            return CreatedAtAction("Get", new {id = newDriver}, newDriver);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    // Oppdaterer fører.
    [HttpPut]
    public async Task<ActionResult<Driver>> Put(Driver updatedDriver)
    {
        try
        {
            context.Entry(updatedDriver).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return NoContent();
        }
        catch
        {
            return StatusCode(500);
        }
    }

    // Sletter fører etter id.
    [HttpDelete("{id}")]
    public async Task<ActionResult<Driver>> Delete(int id)
    {
        try
        {
            Driver? driver = await context.Drivers.FindAsync(id);
            if(driver != null)
            {
             context.Drivers.Remove(driver);
             await context.SaveChangesAsync();
                return NoContent();
            }
                return NoContent();
        }
        catch
        {
            return StatusCode(500);
        }
    }
}
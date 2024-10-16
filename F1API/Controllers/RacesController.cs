// henviser til slideserie : CRUD-fra-frontend-til-backend.pdf og tilhørende forelesninger
namespace F1API.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using F1API.Contexts;
using F1API.Models;

// Håndterer alle CRUD operasjoner mot databasen
[ApiController]
[Route("api/[controller]")]

public class RacesController : ControllerBase
{
    private readonly F1Context context;
    public RacesController(F1Context _context)
    {
        context = _context;
    }
    // Henter alle resultater fra races
    [HttpGet]
    public async Task<ActionResult<Race>> Get()
    {
        try
        {
            List<Race> races = await context.Races.ToListAsync();
            if(races != null)
            {
                return Ok(races);
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
    // Henter Race etter ID
    [HttpGet("{id}")]
    public async Task<ActionResult<Race>> Get(int id)
    {
        try
        {
            Race? races = await context.Races.FindAsync(id);
            if(races != null){
                return Ok(races);
            }
            else{
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }
    // Legger til et nytt objekt, i dette tilfellet Race
    [HttpPost]
    public async Task<ActionResult<Race>> Post(Race newRace)
    {
        try
        {
            context.Races.Add(newRace);
            await context.SaveChangesAsync();
            return CreatedAtAction("Get", new {id = newRace.Id}, newRace);
        }
        catch
        {
            return StatusCode(500);
        }
    }
    // Oppdaterer et race
    [HttpPut]
    public async Task<ActionResult<Race>> Put(Race updatedRace)
    {
        try
        {
            context.Entry(updatedRace).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return NoContent();
        }
        catch
        {
            return StatusCode(500);
        }
    }

    // Sletter race etter ID
    [HttpDelete ("{id}")]
    public async Task<ActionResult<Race>> Delete(int id)
    {
        try
        {
        Race? race = await context.Races.FindAsync(id);
        if(race != null)
        {
            context.Races.Remove(race);
            await context.SaveChangesAsync();
        }
        return NoContent();
        }
        catch{
            return StatusCode(500);
        }
    }
}
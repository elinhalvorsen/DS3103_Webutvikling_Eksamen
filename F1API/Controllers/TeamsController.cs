// henviser til slideserie : CRUD-fra-frontend-til-backend.pdf og tilhørende forelesninger
namespace F1API.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using F1API.Contexts;
using F1API.Models;

// Håndterer alle CRUD operasjoner mot databasen
[ApiController]
[Route("api/[controller]")]

public class TeamsController : ControllerBase
{
    private readonly F1Context context;
    public TeamsController(F1Context _context)
    {
        context = _context;
    }
    // Henter alle resultater fra teams
    [HttpGet] 
    public async Task<ActionResult<Team>> Get()
    {
        try
        {
            List<Team> teams = await context.Teams.ToListAsync();
            if(teams != null)
            {
                return Ok(teams);
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
    // Henter Teams etter ID
    [HttpGet("{id}")]
    public async Task<ActionResult<Team>> Get(int id)
    {
        try
        {
            Team? teams = await context.Teams.FindAsync(id);
            if(teams != null)
            {
                return Ok(teams);
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

    // Legger til et nytt objekt, i dette tilfellet Team
    [HttpPost]
    public async Task<ActionResult<Team>> Post(Team newTeam)
    {
        try
        {
            context.Teams.Add(newTeam);
            await context.SaveChangesAsync();
            return CreatedAtAction("Get", new {id = newTeam.Id}, newTeam);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    // Oppdaterer et team
    [HttpPut]
    public async Task<ActionResult<Team>> Put(Team updatedTeam)
    {
        try
        {
            context.Entry(updatedTeam).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return NoContent();
        }
        catch
        {
            return StatusCode(500);
        }
    }

    // Sletter team etter ID
    [HttpDelete ("{id}")]
    public async Task<ActionResult<Team>> Delete(int id)
    {
        try
        {
        Team? team = await context.Teams.FindAsync(id);
        if(team != null)
        {
            context.Teams.Remove(team);
            await context.SaveChangesAsync();
        }
        return NoContent();
        }
        catch{
            return StatusCode(500);
        }
    }
}
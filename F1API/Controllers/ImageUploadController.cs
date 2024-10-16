// Henviser til Slideserie : -WebApi-Bildeopplast.pdf og tilhørende forelesning(er)
namespace F1API.Controllers;
using Microsoft.AspNetCore.Mvc;
using F1API.Models;

[ApiController]
[Route("api/[controller]")]
// Denne gjør det mulig for bruker å laste opp egne bilder til bildemappen i www-root.
public class ImageUploadController : ControllerBase
{
    private readonly IWebHostEnvironment environment;
    public ImageUploadController(IWebHostEnvironment _environment)
    {
        environment = _environment;
    }

    [HttpPost]
    // Legger til bildet i drivers-mappen som er inne i images.
    public async Task<ActionResult<Driver>> PostImageDriver(IFormFile formFileDriver)
    {
        try
        {
            string webRootPath = environment.WebRootPath;
            string absolutePath = Path.Combine($"{webRootPath}/images/drivers/{formFileDriver.FileName}");
            using(var fileStream = new FileStream(absolutePath, FileMode.Create)){
                await formFileDriver.CopyToAsync(fileStream);
            }
            return Ok();
        }
        catch
        {
            return StatusCode(500);
        }
    }
    
    [HttpPost]
    [Route("[action]")]
    // Legger til bildet i cars-mappen som er inne i images.
    public async Task<ActionResult<Team>> PostImageCar(IFormFile formFileCars)
    {
        try
        {
            string webRootPath = environment.WebRootPath;
            string absolutePath = Path.Combine($"{webRootPath}/images/cars/{formFileCars.FileName}");
            using(var fileStream = new FileStream(absolutePath, FileMode.Create))
            {
                await formFileCars.CopyToAsync(fileStream);
            }
            return Ok();
        }
        catch
        {
            return StatusCode(500);
        }
    }
}
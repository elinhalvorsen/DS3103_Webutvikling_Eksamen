// Henviser til: Slideserie-WebApi-CORS.pdf og tilhørende forelesning(er)
using F1API.Contexts;
using Microsoft.EntityFrameworkCore;
var builder = WebApplication.CreateBuilder(args);

// Databasen
builder.Services.AddDbContext<F1Context>(
    options => options.UseSqlite("Data Source=Databases/F1DB.db")
);

// Denne åpner opp for frontend, slik at den har tilgang til WebApiet.
builder.Services.AddCors(
    builder => {
        builder.AddPolicy("AllowAll", 
            policies => policies
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowAnyOrigin()
        );
    }
);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

//Gjør slik at man kan skrive localhosten for å få opp index siden.
DefaultFilesOptions options = new();
options.DefaultFileNames.Add("index.html");
app.UseDefaultFiles(options);


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Denne er viktig å ha med, slik at vi får tatt filene inni wwwroot i bruk.
app.UseStaticFiles();

// Bruker Cors.
app.UseCors("AllowAll");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

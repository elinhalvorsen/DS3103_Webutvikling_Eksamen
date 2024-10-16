namespace F1API.Models;
using F1API.Interfaces;

//Modell-klasse til Team
public class Team : ITeam
{
    public int Id {get; set;}
    public string? Manufacturer {get; set;}
    public string? Image {get; set;}
    public string? Driver1 {get; set;}
    public string? Driver2 {get; set;}
    
}
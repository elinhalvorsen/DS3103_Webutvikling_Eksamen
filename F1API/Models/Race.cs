namespace F1API.Models;
using F1API.Interfaces;

//Modell-klasse til Race
public class Race : IRace
{
    public int Id {get; set;}
    public string? Winner {get; set;}
    public string? Time {get; set;}
    public string? GrandPrix {get; set;}
    public int Lap {get; set;}
}
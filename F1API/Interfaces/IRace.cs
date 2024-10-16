namespace F1API.Interfaces;

////Kontrakten for hva Race skal inneholde
public interface IRace
{
    //Hva tabellen Race inneholder
    int Id {get; set;}
    string? Winner {get; set;}
    string? Time {get; set;}
    string? GrandPrix {get; set;}
    int Lap {get; set;}
    
}
namespace F1API.Interfaces;

////Kontrakten for hva Driver skal inneholde.
public interface IDriver
{
    //Hva tabellen Driver inneholder.
    int Id {get; set;}
    string? Name {get; set;}
    int Age {get; set;}
    string? Nationality {get; set;}
    string? Image {get; set;}
}
namespace F1API.Interfaces;

//Kontrakten for hva Team skal inneholde
public interface ITeam
{
    //Hva tabellen Team inneholder
    int Id {get; set;}
    string? Manufacturer {get; set;}
    string? Image {get; set;}
    string? Driver1 {get; set;}
    string? Driver2 {get; set;}
}
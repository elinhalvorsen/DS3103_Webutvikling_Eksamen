// Importerer moduler for førere og biler
import DriverModule from "./modules/DriverModule.js";
import CarsModule from "./modules/CarsModule.js";

// Gjør det mulig å oppdatere HTML for å vise førere og biler
const outputSectionDrivers = document.querySelector("#output-section__drivers");
const outputSectionCars = document.querySelector("#output-section__cars");

// Funksjon for å vise alle førere
const showAllDrivers = (drivers) => {
    let htmlTxt = "";
    drivers.forEach((driver) => {
        // Her genereres informasjon om hver enkelt fører, og henter inn informasjon fra DriverModule
        htmlTxt += `
      <article class="col-6 col-md-3 col-lg-3 text-center">
        <div class="card bg-danger">
          <img class="card-img-top" src="images/drivers/${driver.image}" alt="Bilde av førere."/>
          <h4 class="card-title text-light m-3">${driver.name}</h4>
        </div>
      </article>
    `;
    });
    // Her settes inneholdet
    outputSectionDrivers.innerHTML = htmlTxt;
};

// Funksjon for å vise alle biler
const showAllCars = (cars) => {
    let htmlTxt = "";
    cars.forEach((car) => {
        // Her genereres informasjon om hver enkelt bil, og henter inn informasjon fra CarsModule
        htmlTxt += `
      <article class="col-12 col-md-6 col-lg-3 text-center">
        <div class="card shadow">
          <img class="card-img-top" src="images/cars/${car.image}" alt="Bilde av bilene"/>
          <h4 class="card-title m-3">${car.manufactor}</h4>
        </div>
      </article>
    `;
    });
    // Her settes innholdet
    outputSectionCars.innerHTML = htmlTxt;
};

//INIT funksjon
(() => {
    showAllDrivers(DriverModule.getAllDrivers());
    showAllCars(CarsModule.getAllCars());
})();

import { BusinessOffice } from "./business-office.entity.js";
import { DevOffice } from "./dev-office.entity.js";

// Créer une classe société et ajouter 3 bureaux commerciaux et 2 bureaux developpeurs. Leur ajouter prises, tables, téléphones etc. pour que chaque bureau puisse accueillir plusieurs personnes

class Company {
  devOffice: DevOffice[];
  businessOffice: BusinessOffice[];
  constructor() {
    this.devOffice = [];
    this.businessOffice = [];
  }

  addOffice(office: DevOffice | BusinessOffice) {
    if (office instanceof DevOffice) {
      this.devOffice.push(office);
    } else if (office instanceof BusinessOffice) {
      this.businessOffice.push(office);
    }
  }
}

const company = new Company();

const office1 = new DevOffice(10, 15, 5, 20, 25, 21);
company.addOffice(office1);

const office2 = new DevOffice(8, 12, 4, 15, 18, 16);
company.addOffice(office2);

const office3 = new BusinessOffice(12, 20, 8, 25, 30, 35);
company.addOffice(office3);

const office4 = new BusinessOffice(15, 25, 10, 30, 35, 45);
company.addOffice(office4);

const office5 = new BusinessOffice(20, 30, 12, 35, 40, 52);
company.addOffice(office5);

// Faire une boucle d'ajout de personnel (commerciaux ou développeur selon une valeur aléatoire). A chaque itération, afficher le nombre de commerciaux, de développeurs, le taux d'espace dispo de chaque bureau et le taux général de la société en appelant tauxespacedispo().
// Stopper quand il n'y a plus d'espace disponible.

while (company.devOffice.length > 0 && company.businessOffice.length > 0) {
  // Generate a random value (0 or 1) to determine the type of person to add
  const randomValue = Math.floor(Math.random() * 2);

  if (randomValue === 0 && company.devOffice[0].availableSpaceRate() > 0) {
    // Add a dev person
    company.devOffice[0].peopleNumber++;
    console.log("Added a dev person.");

    // Display the number of business people, dev people, and available space rate
    console.log(
      "Business People:",
      company.businessOffice.reduce(
        (sum, office) => sum + office.peopleNumber,
        0
      )
    );
    console.log(
      "Dev People:",
      company.devOffice.reduce((sum, office) => sum + office.peopleNumber, 0)
    );

    company.devOffice.forEach((office, index) => {
      console.log(
        `Dev Office ${index + 1} Space Rate:`,
        office.availableSpaceRate()
      );
    });

    company.businessOffice.forEach((office, index) => {
      console.log(
        `Business Office ${index + 1} Space Rate:`,
        office.availableSpaceRate()
      );
    });

    // Calculate and display the general space rate of the company
    const generalSpaceRate =
      (company.devOffice.reduce(
        (sum, office) => sum + office.availableSpaceRate(),
        0
      ) +
        company.businessOffice.reduce(
          (sum, office) => sum + office.availableSpaceRate(),
          0
        )) /
      (company.devOffice.length + company.businessOffice.length);

    console.log("General Space Rate:", generalSpaceRate);
    console.log("--------------------------------------");
  } else if (randomValue === 1 && company.businessOffice[0].availableSpaceRate() > 0) {
    // Add a business person
    company.businessOffice[0].peopleNumber++;
    console.log("Added a business person.");

    // Display the number of business people, dev people, and available space rate
    console.log(
      "Business People:",
      company.businessOffice.reduce(
        (sum, office) => sum + office.peopleNumber,
        0
      )
    );
    console.log(
      "Dev People:",
      company.devOffice.reduce((sum, office) => sum + office.peopleNumber, 0)
    );

    company.devOffice.forEach((office, index) => {
      console.log(
        `Dev Office ${index + 1} Space Rate:`,
        office.availableSpaceRate()
      );
    });

    company.businessOffice.forEach((office, index) => {
      console.log(
        `Business Office ${index + 1} Space Rate:`,
        office.availableSpaceRate()
      );
    });

    // Calculate and display the general space rate of the company
    const generalSpaceRate =
      (company.devOffice.reduce(
        (sum, office) => sum + office.availableSpaceRate(),
        0
      ) +
        company.businessOffice.reduce(
          (sum, office) => sum + office.availableSpaceRate(),
          0
        )) /
      (company.devOffice.length + company.businessOffice.length);

    console.log("General Space Rate:", generalSpaceRate);
    console.log("--------------------------------------");
  } else {
    console.log("No more space available.");
    break;
  }
}

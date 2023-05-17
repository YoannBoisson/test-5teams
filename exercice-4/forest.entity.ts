import { Burrow } from './burrow.entity';
import { Rabbit } from './rabbit.entity';
import { Hunter } from './hunter.entity';

export class Forest {
    burrows: Burrow[];
    rabbits: Rabbit[];
    hunters: Hunter[];
    totalSquareKilometers: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    treesNumber: number;

    constructor(
        burrows: Burrow[],
        rabbits: Rabbit[],
        hunters: Hunter[],
        totalSquareKilometers: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
        treesNumber: number
    ) {
        this.burrows = burrows;
        this.rabbits = rabbits;
        this.hunters = hunters;
        this.totalSquareKilometers = totalSquareKilometers;
        this.treesNumber = treesNumber;
    }

    hunt(): void {
        this.hunters.forEach(hunter => {
            hunter.hunt();
        });
    }

    run(): void {
        this.rabbits.forEach(rabbit => {
            rabbit.run();
        });
    }

}

const hunter = new Hunter(10, 10, 10, { x: 0, y: 0 });

const whiteRabbit = new Rabbit(5, "white", 2, { x: 0, y: 0 });
const brownRabbit = new Rabbit(5, "brown", 5, { x: 3, y: 4 });

const burrow1 = new Burrow({ x: 0, y: 0 }, false);
const burrow2 = new Burrow({ x: 0, y: 0 }, false);
const burrow3 = new Burrow({ x: 0, y: 0 }, false);

const forest = new Forest([burrow1, burrow2, burrow3], [whiteRabbit, brownRabbit], [hunter], 10, 10);



// - Créer 1 chasseur et 1 forêt avec des lapins et des terriers
// - Lorsque la méthode "chasser" est appelée une routine automatique va faire vivre les personnages qui vont intéragir entre eux (si un lapin est vu, le nombre de balles doit diminuer, le nombre de kilomètres augmente aléatoirement, un lapin proche d'un terrier peut s'y réfugier s'il est vide...)

// Conditions obligatoires :
// - Il faut choisir les paramètres initiaux de telle sorte que le chasseur perde à tous les coups et les lapins soient toujours sauvés de justesse (ça ne doit pas être trop facile pour les lapins)
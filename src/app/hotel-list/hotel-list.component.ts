import { Component } from "@angular/core";

@Component({
    selector: 'app-hotel-list',
    templateUrl: './hotel-list.component.html',
})
export class HotelListComponent {
    title: string = 'Collection de voitures de luxe';

    public cars: any[] = [

          {
            "marque": "Mercedes",
            "modele": "Benz",
            "annee": 2022,
            "couleur": "Noire",
            "carburant": "essence",
            "transmission": "automatique",
            "nombre_portes": 4,
            "nombre_places": 5,
            "prix": 34000,
            "options": ["climatisation", "toit ouvrant", "système de son haut de gamme"],
            "image": "./assets/auto1.jpg"
          },

          {
            "marque": "Audi",
            "modele": "A8",
            "annee": 2022,
            "couleur": "blanc",
            "carburant": "essence",
            "transmission": "automatique",
            "nombre_portes": 4,
            "nombre_places": 5,
            "prix": 24000,
            "options": ["climatisation", "toit ouvrant", "système de son haut de gamme"],
            "image": "./assets/auto2.jpg"
          },

          {
            "marque": "Bmw",
            "modele": "Corolla",
            "annee": 2022,
            "couleur": "blanc",
            "carburant": "essence",
            "transmission": "automatique",
            "nombre_portes": 4,
            "nombre_places": 5,
            "prix": 24000,
            "options": ["climatisation", "toit ouvrant", "système de son haut de gamme"],
            "image": "./assets/auto3.jpg"
          },

          {
            "marque": "Chevrolet",
            "modele": "Corolla",
            "annee": 2022,
            "couleur": "blanc",
            "carburant": "essence",
            "transmission": "automatique",
            "nombre_portes": 4,
            "nombre_places": 5,
            "prix": 24000,
            "options": ["climatisation", "toit ouvrant", "système de son haut de gamme"],
            "image": "./assets/auto4.jpg"
          },

          {
            "marque": "Land",
            "modele": "Corolla",
            "annee": 2022,
            "couleur": "blanc",
            "carburant": "essence",
            "transmission": "automatique",
            "nombre_portes": 4,
            "nombre_places": 5,
            "prix": 24000,
            "options": ["climatisation", "toit ouvrant", "système de son haut de gamme"],
            "image": "./assets/auto5.jpg"
          },

          {
            "marque": "Lamborghini",
            "modele": "Lambo",
            "annee": 2022,
            "couleur": "bleue",
            "carburant": "essence",
            "transmission": "automatique",
            "nombre_portes": 4,
            "nombre_places": 5,
            "prix": 64000,
            "options": ["climatisation", "toit ouvrant", "système de son haut de gamme"],
            "image": "./assets/auto6.jpg"
          },
          
          {
            "marque": "Ferrarri",
            "modele": "Corolla",
            "annee": 2022,
            "couleur": "bleue ciel",
            "carburant": "essence",
            "transmission": "automatique",
            "nombre_portes": 4,
            "nombre_places": 5,
            "prix": 54000,
            "options": ["climatisation", "toit ouvrant", "système de son haut de gamme"],
            "image": "./assets/auto7.jpg"
          },
          
          {
            "marque": "Honda",
            "modele": "Civic",
            "annee": 2023,
            "couleur": "bleue",
            "carburant": "essence",
            "transmission": "automatique",
            "nombre_portes": 4,
            "nombre_places": 5,
            "prix": 34000,
            "options": ["climatisation", "toit ouvrant", "système de son haut de gamme"],
            "image": "./assets/auto8.jpg"
          },

          {
            "marque": "Police",
            "modele": "Corolla",
            "annee": 2022,
            "couleur": "rouge",
            "carburant": "essence",
            "transmission": "automatique",
            "nombre_portes": 4,
            "nombre_places": 5,
            "prix": 24000,
            "options": ["climatisation", "toit ouvrant", "système de son haut de gamme"],
            "image": "./assets/auto9.jpg"
          }
    ];

    public showBadge: boolean = false ;

    public carFilter = 'mot';

    public toggleIsNewBadge(): void {
        this.showBadge = !this.showBadge;
    }

}


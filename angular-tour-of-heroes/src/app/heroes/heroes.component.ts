import { Component, OnInit } from '@angular/core';

//Import Hero interface from hero.ts
import { Hero } from '../hero';

// Import mock HEROES
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // Property
  // hero = 'Windstorm'

  // Refactor to a TYPE of Hero object from interface hero.ts
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  // Define component property called heroes to expose the HEROES array for binding
  heroes = HEROES;

  // Assigns the clicked hero from template to the component's selectedHero
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

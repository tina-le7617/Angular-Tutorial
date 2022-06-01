import { Component, OnInit } from '@angular/core';

//Import Hero interface from hero.ts
import { Hero } from '../hero';

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

  constructor() { }

  ngOnInit(): void {
  }

}

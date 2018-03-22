import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //display list of all heroes
  heroes = HEROES;
  selectedHero : Hero;

  onSelect(hero : Hero) : void
  {
    this.selectedHero = hero;
  }
  constructor() { }

  ngOnInit() {
  }

}

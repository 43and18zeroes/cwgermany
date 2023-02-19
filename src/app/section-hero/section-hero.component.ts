import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-hero',
  templateUrl: './section-hero.component.html',
  styleUrls: ['./section-hero.component.scss']
})
export class SectionHeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  aboutMe() {
    document.getElementById("aboutMe").scrollIntoView();
  }

  contact() {
    document.getElementById("contact").scrollIntoView();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {

  }

  displayImprint() {
    document.querySelector('.imprint__popup').classList.toggle('is__active');
  }

  hideImprint() {
    document.querySelector('.imprint__popup').classList.remove('is__active');
  }

  displayDataPrivacy() {
    document.querySelector('.dataprivacy__popup').classList.toggle('is__active');
  }

  hideDataPrivacy() {
    document.querySelector('.dataprivacy__popup').classList.remove('is__active');
  }

  sectionHero() {
    document.getElementById("sectionHero").scrollIntoView();
  }
  
}

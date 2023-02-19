import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile__nav');

    menu_btn.addEventListener('click', function () {
      menu_btn.classList.toggle('is__active');
      mobile_menu.classList.toggle('is__active');
    });
  }

  sectionHero() {
    document.getElementById("sectionHero").scrollIntoView();
  }

  aboutMe() {
    document.getElementById("aboutMe").scrollIntoView();
  }

  skills() {
    document.getElementById("skills").scrollIntoView();
  }

  portfolio() {
    document.getElementById("portfolio").scrollIntoView();
  }

  contact() {
    document.getElementById("contact").scrollIntoView();
  }

  toggleMobileNav() {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile__nav');

    menu_btn.classList.toggle('is__active');
    mobile_menu.classList.toggle('is__active');
  }

}

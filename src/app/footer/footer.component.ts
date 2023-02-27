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

    const imprint__btn = document.querySelector('.imprint__btn');
    const imprint__popup = document.querySelector('.imprint__popup');

    imprint__btn.addEventListener('click', function () {
      imprint__popup.classList.toggle('is__active');
    });
  }

  closeImprint() {
    document.querySelector('.imprint__popup').classList.remove('is__active');
  }

  displayImprint() {
    document.querySelector('.imprint__popup').classList.toggle('is__active');
  }
  
}

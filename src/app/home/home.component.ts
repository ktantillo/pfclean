import { Component, OnInit } from '@angular/core';
import { SlideInterface } from '../imageSlider/types/slide.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides: SlideInterface[] = [
    { url: '/assets/watson.png', title: 'Watson' },
    { url: '/assets/sweetpea.png', title: 'Sweatpea' },
    { url: '/assets/willie.png', title: 'Willie' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

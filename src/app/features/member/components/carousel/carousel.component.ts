import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  feedbackSlides: OwlOptions = {
    items: 1,
nav: false,
loop: true,
margin: 25,
dots: true,
autoplay: true,
smartSpeed: 500,
autoplayHoverPause: true,
navText: [
  "<i class='ri-arrow-left-s-line'></i>",
  "<i class='ri-arrow-right-s-line'></i>"
]
}

}

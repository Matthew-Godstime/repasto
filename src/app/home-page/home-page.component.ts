import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public carousel!: any;
  constructor(private service: ItemService) { }

  public animation() {
    // Remove the transition class
    const square = document.querySelector('.intro')!;
    square.classList.remove('animate__slideInLeft');

    // Create the observer, same as before:
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          square.classList.add('animate__slideInLeft');
          return;
        }

        square.classList.remove('animate__slideInLeft');
      });
    });

    observer.observe(document.querySelector('.animation-wrapper')!);
  }
  ngOnInit(): void {
    this.carousel = this.service.getCarousel;
    this.animation();
  }

}

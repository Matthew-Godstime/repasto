import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/item.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css', '../main-meal/main-meal.component.css']
})
export class CocktailsComponent implements OnInit {

  public aboutList$!: Observable<Array<any>>;

  constructor(private service: ItemService) { }

  ngOnInit(): void {
    this.aboutList$ = this.service.getAbout;

  }

}

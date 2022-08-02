import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/item.service';
import { ItemList } from 'src/app/home-page/item-list';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  @Input() recipes: any;
  public recipeList$!: Observable<Array<ItemList>>;
  constructor(private service: ItemService) { }

  ngOnInit(): void {
    this.recipeList$ = this.service.getRecipeList;
  }

}

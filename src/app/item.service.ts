import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { ItemList } from './home-page/item-list';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private allList = new ItemList();
  constructor() { }
  
  public get getItemList() : Observable<ItemList[]> {
    return of(this.allList.itemList)
  }

  
  public get getRecipeList() : Observable<ItemList[]> {
    return of(this.allList.recipesList)
  }
  
  
  public get getCarousel() : any {
    return this.allList.carouselList;
  }

  
  public get getAbout(): Observable<Array<any>> {
    return of(this.allList.aboutList);
  }

  private allItems!: ItemList[];
  private AllItems(): Observable<ItemList[]> {
    return of(this.allItems = this.allList.itemList.concat(this.allList.recipesList));
  }
  
  getItem(id: number | string): Observable<ItemList> {
    return this.AllItems().pipe(
      // (+) before `id` turns the string into a number
      map((items: ItemList[]) => items.find(item => item.id === +id)!)
    );
  }

}

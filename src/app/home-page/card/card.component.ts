import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemList } from '../item-list';
import { ItemService } from 'src/app/item.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  public itemList$!: Observable<Array<ItemList>>;

  constructor(private service: ItemService) { }

  ngOnInit(): void {
    this.itemList$ = this.service.getItemList;

  }

}
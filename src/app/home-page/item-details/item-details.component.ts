import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ItemService } from 'src/app/item.service';
import { ItemList } from '../item-list';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  testing: string ='Hello World'
  public aboutList$!: Observable<Array<any>>;
  item$!: Observable<ItemList>;
  constructor(
    private route: ActivatedRoute,
    private service: ItemService
  ) { }

  ngOnInit(): void {
    this.aboutList$ = this.service.getAbout;

    this.item$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getItem(params.get('id')!))
    );
  }

}

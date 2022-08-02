import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/item.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  public aboutList$!: Observable<Array<any>>;

  constructor(private service: ItemService) { }
  @Input() about!: any;
  ngOnInit(): void {
    this.aboutList$ = this.service.getAbout;

  }

}

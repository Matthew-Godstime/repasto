import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ItemList } from '../home-page/item-list';
import { Router } from '@angular/router';
import { Renderer2 } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {

  public search!: string;
  public item$!: Observable<ItemList[]> ;
  private contain$!: Observable<HTMLDivElement>;
  public follows!: Array<ItemList>;
  private subscription!: Subscription;
  constructor(private router: Router, private service: ItemService) { }

  public check(): void {
    const con = document.querySelector(`.contain`) as HTMLDivElement;
    this.contain$ = of(con);
    this.contain$.subscribe(value => {
      if (value.hasChildNodes()) {
        for (const ch of Array.from(value.childNodes)) {
          ch.remove();
        }
      }
    });
    this.item$.subscribe(items => {
      items.forEach(item => {
        if (item.header?.toLocaleLowerCase().includes(this.search.toLocaleLowerCase())) {
          this.node(item);
        }
      });
    });
  }

  private node(item: ItemList): void {
    this.createNode('div', 'h3', 'a', item).addEventListener('click', () => {
      this.router.navigate(['/item-details', item.id]);
    });

  }

  private createNode(wrapper: string, header: string, child: string, item: ItemList): HTMLElement {
    let div = document.createElement(wrapper);
    let a = document.createElement(child);
    let h3 = document.createElement(header);
    div.style.margin = '.5em 0'
    a.textContent = item.header!;
    a.style.cursor = 'pointer';
    h3.appendChild(a);
    div.appendChild(h3);
    const node = document.querySelector('.contain')?.appendChild(div)!;
    return node;
  }

  // private Render(item: ItemList) {
  //   const div = this.renderer.createElement('div') as HTMLDivElement;
  //   const a = this.renderer.createElement('a') as HTMLAnchorElement;
  //   const h3 = this.renderer.createElement('h3') as HTMLHeadingElement;
  //   a.innerText = item.header!;
  //   a.href = `/item-details/${item.id}`
  //   h3.appendChild(a);
  //   this.renderer.setStyle(a, 'cursor', 'pointer')
  //   div.appendChild(h3);
  //   this.renderer.listen(h3, 'click', ($event) => {
  //     console.log($event);
  //     this.router.navigate(['/item-details', item.id]);
  //   })
  //   this.renderer.appendChild(this.elementRef.nativeElement, div);
  // }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.item$ = this.service.getItemList;
    this.subscription =  this.service.getAbout.subscribe(value => {
      value.forEach(el => {
        this.follows = el.ctlFollowList;
      })
    });
  }

}

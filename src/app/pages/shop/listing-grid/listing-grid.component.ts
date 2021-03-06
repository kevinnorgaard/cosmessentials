import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listing-grid',
  templateUrl: './listing-grid.component.html',
  styleUrls: ['./listing-grid.component.css']
})
export class ListingGridComponent implements OnInit {
  @Input() type: string;

  ngOnInit() {
  }

  listingSize() {
    const n = 4;
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
    return arr;
  }
}

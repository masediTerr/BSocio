import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'searchBar',
  templateUrl: './search.component.html',
  styleUrls: [
    './search.component.css',
    '../../nav-bar/nav-bar.component.css'
  ] 
})
export class SearchComponent implements OnInit {
  searchIn:string = 'All'
  constructor() { }

  ngOnInit(): void {
    this.searchIn
  }

}

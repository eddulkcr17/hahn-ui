import { Component } from '@angular/core';
import { Artist } from 'src/app/interface/artist';

const ELEMENT_DATA: Artist[] = [
 { artistName:'Adele', diskName:'Tour2023',publication:'2021' }
];

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-list-artist',
  templateUrl: './list-artist.component.html',
  styleUrls: ['./list-artist.component.css']
})
export class ListArtistComponent {
  displayedColumns: string[] = ['artistName','diskName','publication'];
  dataSource = ELEMENT_DATA;

}

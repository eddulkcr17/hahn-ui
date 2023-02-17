import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Artist } from 'src/app/interface/artist';

const listArtist: Artist[] = [
 { artistName:'Adele', diskName:'Tour2023',publication:'2021' },
 { artistName:'U2', diskName:'Tour2023',publication:'2023' },
 { artistName:'Sliptnot', diskName:'Tour2023',publication:'2021' },
 { artistName:'Papa Roach', diskName:'Tour2023',publication:'2021' },
 { artistName:'Blink 182', diskName:'Tour2023',publication:'2021' },
 { artistName:'The Rasmuss', diskName:'Tour2023',publication:'2021' },
 { artistName:'Simple Plan', diskName:'Tour2023',publication:'2021' },
 { artistName:'Oasis', diskName:'Tour2023',publication:'2021' }
];

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-list-artist',
  templateUrl: './list-artist.component.html',
  styleUrls: ['./list-artist.component.css']
})
export class ListArtistComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['artistName','diskName','publication'];
  dataSource = new MatTableDataSource<Artist>(listArtist);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(){}
  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-artist',
  templateUrl: './add-edit-artist.component.html',
  styleUrls: ['./add-edit-artist.component.css']
})
export class AddEditArtistComponent implements OnInit {
  loading: boolean;

  constructor(){
    this.loading = false;
  }

  ngOnInit(): void {

  }

}

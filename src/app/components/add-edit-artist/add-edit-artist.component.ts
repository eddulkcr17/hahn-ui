import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Artist } from 'src/app/interface/artist';

@Component({
  selector: 'app-add-edit-artist',
  templateUrl: './add-edit-artist.component.html',
  styleUrls: ['./add-edit-artist.component.css']
})
export class AddEditArtistComponent implements OnInit {
  loading: boolean;
  form:FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      artistName:['',Validators.required],
      diskName:['',Validators.required],
      publication:['']
    })
    this.loading = false;
  }

  ngOnInit(): void {

  }

  addArtist(){

    const artist: Artist ={
      artistName: this.form.value.artistName,
      diskName: this.form.value.diskName,
      publication: this.form.value.publication
    }

    console.log(artist)
  }

}

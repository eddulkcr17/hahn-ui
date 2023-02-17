import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditArtistComponent } from './components/add-edit-artist/add-edit-artist.component';
import { ListArtistComponent } from './components/list-artist/list-artist.component';
import { ViewArtistComponent } from './components/view-artist/view-artist.component';

const routes: Routes = [
  {path:'', redirectTo:'listArtist', pathMatch: 'full'},
  { path:'listArtist', component: ListArtistComponent },
  { path:'addArtist', component: AddEditArtistComponent },
  { path:'viewArtist/:id', component: ViewArtistComponent },
  { path:'editArtist/:id', component: AddEditArtistComponent },
  {path:'**', redirectTo:'listArtist', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

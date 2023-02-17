import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//modules
import { SharedModule } from './shared/shared.module';

//components
import { AddEditArtistComponent } from './components/add-edit-artist/add-edit-artist.component';
import { ListArtistComponent } from './components/list-artist/list-artist.component';
import { ViewArtistComponent } from './components/view-artist/view-artist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AddEditArtistComponent,
    ListArtistComponent,
    ViewArtistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

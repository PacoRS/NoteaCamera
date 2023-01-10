import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { NotesService } from './services/notes.service';
import { UiService } from './services/ui.service';
import { NotesServiceAPI } from './services/notesAPIservice';

import { AngularFireStorageModule } from '@angular/fire/compat/storage';


@NgModule({
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NotesService,
    NotesServiceAPI,
    UiService
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

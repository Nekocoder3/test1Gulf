import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Routes
import {APP_ROUTING} from './app.routes';

// component
import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {BodyComponent} from './components/body/body.component';
import {FooterComponent} from './components/footer/footer.component';
import {FilmComponent} from './components/films/film.component';


@NgModule({
  declarations: [
    AppComponent, HeaderComponent, BodyComponent, FooterComponent, FilmComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

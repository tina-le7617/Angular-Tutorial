import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// NgModel import
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

// Metadata decorator
@NgModule({
  // Every component MUST be declared in EXACTLY one NgModule
  // Angular CLI automatically generates for us
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

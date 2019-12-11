import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommitCardComponent } from './feature/commit-card/components/commit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CommitCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

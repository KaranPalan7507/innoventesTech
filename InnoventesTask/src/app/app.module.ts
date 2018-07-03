import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SelectDetailsComponent } from './select-details/select-details.component';


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    SelectDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

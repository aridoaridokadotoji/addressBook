import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddressEntryComponent } from './components/address-entry.component';
import { AddressComponent } from './components/address.component';
import {FormsModule} from '@angular/forms'
import { AddressService } from './components/address.service';

@NgModule({
  declarations: [
    AppComponent,
    AddressEntryComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }

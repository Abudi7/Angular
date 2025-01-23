// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  // Import AppRoutingModule
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule

@NgModule({
  declarations: [
    AppComponent  // Declare your AppComponent here
  ],
  imports: [
    BrowserModule,      // Ensure BrowserModule is included
    AppRoutingModule,   // Import the routing module
    HttpClientModule,   // Add HttpClientModule to the imports
  ],
  providers: [],
  bootstrap: [AppComponent],  // Ensure AppComponent is bootstrapped
})
export class AppModule {}

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GridModule } from '@syncfusion/ej2-angular-grids';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageSliderModule } from './imageSlider/imageSlider.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { GoatsComponent } from './Animals/goats/goats.component';
import { DucksComponent } from './Animals/ducks/ducks.component';
import { ChickensComponent } from './Animals/chickens/chickens.component';
import { BiggonsComponent } from './Animals/biggons/biggons.component';
import { PigsComponent } from './Animals/pigs/pigs.component';
import { RouterModule } from '@angular/router';
import { HelpoutComponent } from './helpout/helpout.component';
import { TurkeysComponent } from './Animals/turkeys/turkeys.component';


@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    NavComponent, 
    FooterComponent, 
    HelpoutComponent,
    AboutComponent, 
    GoatsComponent, 
    DucksComponent, 
    ChickensComponent,
    BiggonsComponent,
    PigsComponent, 
    TurkeysComponent],
  imports: [
    BrowserModule,
    GridModule,
    AppRoutingModule,
    HttpClientModule,
    ImageSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

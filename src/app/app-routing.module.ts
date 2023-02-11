import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BiggonsComponent } from './Animals/biggons/biggons.component';
import { ChickensComponent } from './Animals/chickens/chickens.component';
import { DucksComponent } from './Animals/ducks/ducks.component';
import { GoatsComponent } from './Animals/goats/goats.component';
import { PigsComponent } from './Animals/pigs/pigs.component';
import { TurkeysComponent } from './Animals/turkeys/turkeys.component';
import { HelpoutComponent } from './helpout/helpout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { component: HomeComponent, path: ""}, 
  { component: AboutComponent, path:"about"},
  { component: HelpoutComponent, path: "help"},
  { component: GoatsComponent, path: "goats"},
  { component: DucksComponent, path: "ducks"},
  { component: PigsComponent, path: "pigs"},
  { component: BiggonsComponent, path: "biggons"},
  { component: TurkeysComponent, path: "turkeys"},
  { component: ChickensComponent, path: "chickens"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

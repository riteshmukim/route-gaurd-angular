import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ComposeComponent } from './compose/compose.component';

const routes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'compose',
    component: ComposeComponent
  },
  {
    path: 'compose',
    component: ComposeComponent,
    outlet: 'popup'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

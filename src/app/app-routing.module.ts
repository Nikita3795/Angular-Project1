import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcompComponent } from './acomp/acomp.component';
import { BcompComponent } from './bcomp/bcomp.component';
import { CcompComponent } from './ccomp/ccomp.component';

const routes: Routes = [

  {
    path:"a",component:AcompComponent
  },
  {
    path:"b",component:BcompComponent
  },
  {
    path:"c",component:CcompComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

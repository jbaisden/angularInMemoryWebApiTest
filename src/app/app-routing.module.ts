import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestListComponent } from './test-list/test-list.component';
import { TestEditComponent } from './test-edit/test-edit.component';

const routes: Routes = [
  { path: '', component: TestListComponent, pathMatch: 'full' },
  { path: 'list', component: TestListComponent },
  { path: 'edit/:id', component: TestEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

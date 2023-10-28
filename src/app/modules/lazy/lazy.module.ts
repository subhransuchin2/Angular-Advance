import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyOneComponent } from './lazy-one/lazy-one.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: LazyOneComponent }];
@NgModule({
  declarations: [LazyOneComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LazyModule {}

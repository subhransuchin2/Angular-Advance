import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreOneComponent } from './pre-one/pre-one.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: PreOneComponent }];
@NgModule({
  declarations: [PreOneComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PreModule {}

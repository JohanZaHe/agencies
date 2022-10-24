import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciesComponent } from './feature/agencies/agencies.component';
import { AgencyDetailComponent } from './feature/agencies/agency-detail/agency-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'agencies',
  },
  { path: 'agencies', component: AgenciesComponent },
  { path: 'details/:id', component: AgencyDetailComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'agencies' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

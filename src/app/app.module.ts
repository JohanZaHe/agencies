import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp } from './core/initializeApp';
import { AgenciesComponent } from './feature/agencies/agencies.component';
import { AgencyCardComponent } from './feature/agencies/agency-card/agency-card.component';
import { AgencyDetailComponent } from './feature/agencies/agency-detail/agency-detail.component';
import { AgencyMapComponent } from './feature/agencies/agency-map/agency-map.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AgenciesComponent,
    AgencyCardComponent,
    AgencyDetailComponent,
    AgencyMapComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => initializeApp,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

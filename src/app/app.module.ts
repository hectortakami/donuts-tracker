import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbTabsetModule,
  NbCardModule,
  NbListModule,
  NbUserModule,
  NbButtonModule,
  NbIconModule,
  NbDialogModule,
  NbCalendarModule,
  NbToastrModule,
  NbTagModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CreatorsComponent } from './dialogs/creators/creators.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { CalendarComponent } from './dialogs/calendar/calendar.component';

@NgModule({
  declarations: [AppComponent, CreatorsComponent, CalendarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbEvaIconsModule,
    NbTabsetModule,
    NbCardModule,
    NbListModule,
    NbUserModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbIconModule,
    NbDialogModule.forRoot(),
    NbCalendarModule,
    NbTagModule,
    NbToastrModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

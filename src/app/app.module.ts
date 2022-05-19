import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CreatorsComponent } from './dialogs/creators/creators.component';

@NgModule({
  declarations: [AppComponent, CreatorsComponent],
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

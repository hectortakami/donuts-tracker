import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CreatorsComponent } from './dialogs/creators/creators.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private dialogService: NbDialogService) {}

  date = new Date();
  users: { name: string; title: string }[] = [
    { name: 'Carla Espinosa', title: 'Este Googler debe donas! 🍩' },
    { name: 'Bob Kelso', title: 'Este Googler debe tacos! 🌮' },
    { name: 'Janitor', title: 'Este Googler debe carnita asada! 🥩' },
    { name: 'Carla Espinosa', title: 'Este Googler debe donas! 🍩' },
    { name: 'Bob Kelso', title: 'Este Googler debe tacos! 🌮' },
    { name: 'Janitor', title: 'Este Googler debe carnita asada! 🥩' },
    { name: 'Carla Espinosa', title: 'Este Googler debe donas! 🍩' },
    { name: 'Bob Kelso', title: 'Este Googler debe tacos! 🌮' },
    { name: 'Janitor', title: 'Este Googler debe carnita asada! 🥩' },
    { name: 'Carla Espinosa', title: 'Este Googler debe donas! 🍩' },
    { name: 'Bob Kelso', title: 'Este Googler debe tacos! 🌮' },
    { name: 'Janitor', title: 'Este Googler debe carnita asada! 🥩' },
  ];

  open() {
    this.dialogService.open(CreatorsComponent, { autoFocus: true });
  }
}

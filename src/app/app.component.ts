import { Component } from '@angular/core';
import {
  NbComponentStatus,
  NbDialogService,
  NbGlobalLogicalPosition,
  NbIconConfig,
  NbToastrService,
} from '@nebular/theme';
import { CreatorsComponent } from './dialogs/creators/creators.component';
import { FirestoreService } from './services/firestore.service';
import { CalendarComponent } from './dialogs/calendar/calendar.component';
import { Timestamp } from 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  date = new Date();
  users = [];

  constructor(
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    public firestore: FirestoreService
  ) {
    this.firestore.getCollection().subscribe((data) => {
      this.users = data;
    });
  }

  open() {
    this.dialogService.open(CreatorsComponent, { autoFocus: true });
  }

  openCalendar(user: any) {
    this.dialogService
      .open(CalendarComponent)
      .onClose.subscribe(async (data) => {
        user['prometido'] = data;
        await this.firestore.updateRegister(user['id'], user);
        this.showToast('success');
      });
  }

  showToast(status: NbComponentStatus) {
    const iconConfig: NbIconConfig = { icon: 'star', pack: 'eva' };

    this.toastrService.show(
      `Gracias por confirmar tu fecha 🥳`,
      'Agendaste exitosamente!',
      {
        status: status,
        icon: iconConfig,
        duration: 10000,
        position: NbGlobalLogicalPosition.TOP_START,
      }
    );
  }

  processURL(message: string) {
    // https://mail.google.com/chat/u/0/#chat/space/AAAALd7nVf4
    //https://chat.google.com/room/AAAALd7nVf4/LoZ6F2-wU2I
    var data = message.split('/');
    return 'https://chat.google.com/room/' + data[1];
  }

  processType(type: string) {
    switch (type) {
      case 'Donas':
        return 'Nos debe donas 🍩';
      default:
        return type;
    }
  }

  processDate(timestamp: Timestamp) {
    return timestamp.toDate();
  }

  userHasScheduled(user: any) {
    var prometido: Timestamp = user['prometido'];
    var prometido_date = prometido.toDate();
    if (prometido_date <= this.date) {
      return false;
    }
    return true;
  }
}

import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { doc, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  collection = collection(this.firestore, 'donas');
  item$: Observable<any> | undefined;

  constructor(private firestore: Firestore) {}

  getCollection() {
    this.item$ = collectionData(this.collection);
    return this.item$;
  }

  async updateRegister(id: string, user: any) {
    const ref = doc(this.firestore, `donas/${id}`);
    await updateDoc(ref, user)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

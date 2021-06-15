import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
   private collectionRef: AngularFirestoreCollection<Customer>;
   private customers$: Observable<Customer[]>;

  constructor(private afs: AngularFirestore) {
    this.collectionRef = this.afs.collection<Customer>('customers', (ref) =>
      ref.orderBy('firstName', 'asc')
    );

    this.customers$ = this.collectionRef
      .valueChanges({ idField: 'id' })
      .pipe(shareReplay(1));
  }

  add(customer: Customer) {
    return this.collectionRef.add(customer);
  }

  getAll() {
    return this.customers$;
  }

  remove(id: string) {
    return this.collectionRef.doc(id).delete();
  }

  update(id: string,customer:Customer) {
    return this.collectionRef.doc(id).update(customer);
  }
  getById(id: string): Observable<Customer> {
    return this.collectionRef
      .doc<Customer>(id)
      .valueChanges()
      .pipe(
        map((doc) => {
          if (doc) {
            return { id, ...doc };
          }
          return null;
        })
      );
  }
  // getById(id: string) {
  //   return this.collectionRef.doc(id).valueChanges({ idField: 'id' });
  // }

}

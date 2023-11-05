import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import {

  collection,
  collectionData,
  addDoc, doc, updateDoc, deleteDoc,

} from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private afs: Firestore) { }
  loadData() {

    const collectionInstance = collection(this.afs, 'Categories');
    return collectionData(collectionInstance, { idField: 'id' }); // this returns an observable

  }

}

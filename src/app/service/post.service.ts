import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import {

  collection,
  collectionData,
  addDoc, doc, updateDoc, deleteDoc, query, getDoc


} from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private afs: Firestore) { }
  loadFeaturedPost() {

    const collectionInstance = collection(this.afs, 'Posts');
    return collectionData(collectionInstance, { idField: 'id' }); // this returns an observable


  }

  loadSinglePost() {
    const collectionInstance = collection(this.afs, 'Posts');
    return collectionData(collectionInstance, { idField: 'id' }); // this returns an observable

  }

  updateViews(id, PostData) {

    let UpdatedView = {
      views: PostData.views + 1
    }
    const docInstance = doc(this.afs, 'Posts', id);

    updateDoc(docInstance, UpdatedView).then((result) => {
      //console.log(result);
      console.log('updateview', result);
    })
      .catch((err) => {
        console.log(err)
      })
    console.log('updateview');
  }


}

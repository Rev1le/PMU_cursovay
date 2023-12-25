import { collection, addDoc, doc, getDoc } from 'firebase/firestore';

const DB_NAME = 'users';

export function getUserCollection() {
  return collection(this.$db, DB_NAME);
}

export async function getUserByUUID() {
  const userUUID = localStorage.getItem('userUUID');

  if (userUUID === null) {
    return null;
  }

  const docRef = doc(this.$db, DB_NAME, userUUID);
  const userItem = await getDoc(docRef);

  if (!userItem.exists()) {
    localStorage.removeItem('userUUID');
    return null;
  }

  return userItem.data();
}

export async function createUser() {
  const colRef = collection(this.$db, DB_NAME);
  const dataObj = {
    name: 'Roman',
  };
  const docRef = await addDoc(colRef, dataObj);
  console.log('id', docRef.id);

  localStorage.setItem('userUUID', docRef.id);

  return docRef;
}
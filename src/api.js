import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDEpCvBvEXMwYwOxduXJglz9ZNDMD5ERq8",
  authDomain: "vanlife-22222.firebaseapp.com",
  projectId: "vanlife-22222",
  storageBucket: "vanlife-22222.firebasestorage.app",
  messagingSenderId: "619151210802",
  appId: "1:619151210802:web:f7ccf414c33d6f17317f2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionsRef = collection(db, "vans");

export async function getVans(){
  const snapshot = await getDocs(vansCollectionsRef);
  return snapshot.docs.map(doc => ({...doc.data(), id:doc.id}));
}

export async function getVan(id){
  const vanDocRef = doc(db, "vans", id);
  const snapshot = await getDoc(vanDocRef);
  return {...snapshot.data(), id: snapshot.id};
}

// export async function getVans(){
//   const response = await fetch("/api/vans");
//   if (!response.ok) {
//     throw {
//       message: "Failed to fetch Vans",
//       statusText: response.statusText,
//       status: response.statusText,
//     }
//   }
//   const data = await response.json();
//   return data.vans;
// }

// export async function getVan(id){
//   const response = await fetch(`/api/vans/${id}`);
//   if(!response.ok){
//     throw {
//       message: "Failed to fetch Vans",
//       statusText: response.statusText,
//       status: response.statusText,
//     }
//   }
//   const data = await response.json();
//   return data.vans;
// }

export async function getHostVans(){
  const response = await fetch("/api/host/vans");
  if(!response.ok){
    throw {
      message: "Failed to fetch Vans",
      statusText: response.statusText,
      status: response.statusText,
    }
  }
  const data = await response.json();
  return data.vans;
}

export async function getHostVan(id){
  const response = await fetch(`/api/host/vans/${id}`);
  if(!response.ok){
    throw {
      message: "Failed to fetch Vans",
      statusText: response.statusText,
      status: response.statusText,
    }
  }
  const data = await response.json();
  return data.vans;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login",
    { method: "post", body: JSON.stringify(creds) }
  )
  const data = await res.json()
  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status
    }
  }
  return data
}
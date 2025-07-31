import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";

interface User {
  id: string;
  name: string;
  email: string;
  teamId: string;
  userUID: string;
}

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export const getUserById = async (userId: string) => {
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);
  return userSnap.exists() ? { id: userSnap.id, ...userSnap.data() } : null;
};

//TODO: Revisar ya que por el momento no se usa ninguno de aca en adelante, solo uso el getUserById para el usuario invitado o lo hardcodeo en localStorage segun me de el tiempo de terminar el desarrollo basico pedido
export const getUsersByTeamId = async (teamId: string) => {
  const usersCollection = collection(db, "users");
  const q = query(usersCollection, where("teamId", "==", teamId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getUserByUID = async (uid: string) => {
  const usersCollection = collection(db, "users");
  const q = query(usersCollection, where("userUID", "==", uid));
  const snapshot = await getDocs(q);
  if (!snapshot.empty) {
    const user = snapshot.docs[0];
    return { id: user.id, ...user.data() };
  }
  return null;
};

export const createUser = async (user: User) => {
  const usersCollection = collection(db, "users");
  const docRef = await addDoc(usersCollection, user);
  return docRef.id;
};

export const deleteUser = async (userId: string) => {
  const userRef = doc(db, "users", userId);
  await deleteDoc(userRef);
};



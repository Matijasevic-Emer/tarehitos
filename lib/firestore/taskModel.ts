import { initializeApp } from "firebase/app";
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

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getTasksByUserId = async (userId: string) => {
  const tasksCollection = collection(db, "tasks");
  const q = query(tasksCollection, where("tutorUser", "==", userId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getTasksByBoardId = async (boardId: string) => {
  const tasksCollection = collection(db, "tasks");
  const q = query(tasksCollection, where("boardId", "==", boardId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getTaskById = async (taskId: string) => {
  const taskRef = doc(db, "tasks", taskId);
  const taskSnap = await getDoc(taskRef);
  return taskSnap.exists() ? { id: taskSnap.id, ...taskSnap.data() } : null;
};

export const createTask = async (task: any) => {
  const tasksCollection = collection(db, "tasks");
  const docRef = await addDoc(tasksCollection, task);
  return docRef.id;
};

export const updateTask = async (taskId: string, updatedTask: any) => {
  const taskRef = doc(db, "tasks", taskId);
  await updateDoc(taskRef, updatedTask);
};

export const deleteTask = async (taskId: string) => {
  const taskRef = doc(db, "tasks", taskId);
  await deleteDoc(taskRef);
};
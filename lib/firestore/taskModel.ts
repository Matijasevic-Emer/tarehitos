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
export interface Tarea {
  id?: string; // puede venir o no porque Firestore lo genera
  name: string;
  description: string;
  status: string;
  estimatedStartDate: string;
  estimatedFinishDate: string;
  createdDate: string;
  userAssigned: string;
  columnId: number;
  userInvolved: string; // JSON.stringify creo
  tutorUser: string;
  createdUser: string;
  boardId: string;
  points: string;
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

export const createTask = async (task: Tarea) => {
  const tasksCollection = collection(db, "tasks");
  const docRef = await addDoc(tasksCollection, task);
  return docRef.id;
};

export const updateTask = async (taskId: string, updatedTask: Tarea) => {
  // const taskRef = doc(db, "tasks", taskId);
  // await updateDoc(taskRef, updatedTask);

  const { id, ...taskData } = updatedTask; // 🔥 omitimos id
  const taskRef = doc(db, "tasks", taskId);
  await updateDoc(taskRef, taskData);
};

export const deleteTask = async (taskId: string) => {
  const taskRef = doc(db, "tasks", taskId);
  await deleteDoc(taskRef);
};


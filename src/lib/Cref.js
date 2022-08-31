import { db } from './firebase-config'
import { collection } from 'firebase/firestore'

export const cRef = collection(db, 'todos');
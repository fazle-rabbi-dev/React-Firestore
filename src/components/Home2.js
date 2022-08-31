import { useState,useEffect } from 'react'
import { db } from '../lib/firebase-config'
import { cRef } from '../lib/Cref'
import { 
  getDocs,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc
} from 'firebase/firestore';

function Home2() {
  const [todos,set_todos] = useState(null);
  const [test,set_test] = useState(null);
  
  async function getTodos(){
    try {
      // const cRef = await collection(db, 'todos');
      const data = await getDocs(cRef);
      const docs = data.docs.map(doc => {
        return {
          id: doc.id,
          data: doc.data()
        };
      });
      set_test(docs);
      set_todos(docs);
    } catch (err) {
      alert(err.message);
    }
  }
  
  async function deleteTodo(id){
    try {
      const docRef = doc(db, 'todos', id);
      await deleteDoc(docRef)
      // alert('Deleted successfull')
    } catch (err) {
      alert(err.message)
    }
  }
  
  useEffect( () => {
    const ub = onSnapshot(cRef, snapshot => {
      const allDocs = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          data: doc.data()
        }
      });
      set_todos(allDocs);
    })
    
    return () => {
      ub();
    }
  },[]);
  
  return (
    <>
      {test && <pre>{JSON.stringify(test)}</pre>}
      <div class="home">
        <div class="">
          <ul>
            {
              todos && todos.map( todo => {
                return <li>{ todo.data.todo } 
                <button onClick={ () => deleteTodo(todo.id) }>DEL</button>
                <pre>{ todo.id }</pre>
                </li>
              })
            }
          </ul>
        </div>
      </div>      
    </>
  );
}

export default Home2;
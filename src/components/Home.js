import { useState,useEffect } from 'react'
import { db } from '../lib/firebase-config'
import { getDocs,collection,deleteDoc,doc } from 'firebase/firestore'
import { cRef } from '../lib/Cref'

function Home() {
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
      alert('Deleted successfull')
    } catch (err) {
      alert(err.message)
    }
  }
  
  useEffect( () => {
    getTodos();
  },[]);
  
  return (
    <>
      {test && <pre>{JSON.stringify(test)}</pre>}
      <div class="home">
        <header>
          <h2>🔥 React Firestore</h2>
        </header>
        <div class="">
          <ul>
            {
              todos && todos.map( todo => {
                return <li>{ todo.data.todo } <button onClick={ () => deleteTodo(todo.id) }>DEL</button></li>
              })
            }
          </ul>
        </div>
      </div>      
    </>
  );
}

export default Home;

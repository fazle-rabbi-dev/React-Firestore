import { useState } from 'react';
import { updateDoc,doc } from 'firebase/firestore';
import { db } from '../lib/firebase-config'

const myStyle = {
  display: 'block',
  width: '100%',
  margin: '8px 0',
  outline: 0
}

const UpdateTodo = () => {
  const [id,setId] = useState('')
  const [value,setValue] = useState('')
  
  async function handleSubmit(event){
    try {
      event.preventDefault();
      if(id === '' && value === ''){
        return alert('Value couldn\'t be empty!')
      }
      const docRef = doc(db, 'todos', id);
      await updateDoc(docRef, {todo: value});
      setId('');
      setValue('');
    } catch (e) {
      alert(e.message)
    }
  }
  
  return(
    <form onSubmit={ handleSubmit }>
      <div style={{ padding: '10px' }}>
        <input style={ myStyle } onChange={ (e) => setId(e.target.value) } placeholder='Enter todo id' type="text" value={ id } />
        <input style={ myStyle } onChange={ (e) => setValue(e.target.value) } placeholder='Enter new todo' type="text" value={ value } />
        <button style={ myStyle } type="submit">Update Todo</button>
      </div>
    </form>
  );
}

export default UpdateTodo;
import { useState } from 'react';
import { addDoc } from 'firebase/firestore'
import { cRef } from '../lib/Cref'
import styles from './addtodo.module.css'

const Addtodo = () => {
  const [value,setValue] = useState('')
  
  async function createNewTodo(){
    try {
      await addDoc(cRef, {todo: value})
      setValue('')
    } catch (err) {
      alert(err.message)
    }
  }
  
  function handleSubmit(event){
    event.preventDefault();
    if(value === '') return alert('Empty todo couldn\'t created!');
    createNewTodo();
  }
  
  return (
    <form className={ styles.form } onSubmit={ handleSubmit }>
      <div class="">
        <input className={ styles.input } onChange={ (e) => { setValue(e.target.value) }} type="text" value={ value } />
        <button className={ styles.button } type="submit">Add Todo</button>
      </div>
    </form>
  );
};

export default Addtodo;
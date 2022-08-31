import Home from './components/Home'
import Home2 from './components/Home2'
import './App.css';
import Addtodo from './components/Addtodo'
import UpdateTodo from './components/UpdateTodo'

function App() {
  return (
    <>
      <header>
          <h2>🔥 React Firestore</h2>
      </header>
      <Addtodo/>
      <UpdateTodo/>
      <Home2 />
    </>
  );
}

export default App;

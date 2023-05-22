
import './App.css';
import MainTable from './components/table';
import Form from './components/form';
import Model from './components/Model';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({});
 
  const [table,setTable]=useState([])
  
  return (
    <div className="App">
      <Model
        user={user}
        setUser={setUser}
        table={table}
        setTable={setTable}
      ></Model>
      {/* <Form></Form> */}
      <MainTable table={table}></MainTable>
    </div>
  );
}

export default App;

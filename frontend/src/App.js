import React, { createContext, useEffect, useReducer } from 'react';
import { Table, Row, Col } from 'antd'
import axios from 'axios'

import 'antd/dist/antd.css'
import './App.css';

import { FORM_COLUMNS } from './mock/form-columns'
import { todoReducer } from './store/formReducer'
import { TodoForm } from './components/Form/TodoForm.component'

export const TodoContext = createContext()

const App = () =>{
  const [todos, dispatchTodos] = useReducer(todoReducer, []);
  useEffect(() => {  
    axios.get('http://localhost:7000/api/v1/todos')  
        .then(response => {
          dispatchTodos({ type: 'LOAD_TODO', payload: response.data })  
        })  
        .catch(error => {  
          dispatchTodos({ type: 'LOAD_FAILURE' })  
        })  
  }, [])

  return (
    <TodoContext.Provider value={[todos, dispatchTodos]}>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <TodoForm />
        </Col>
      </Row>
      <Row type='flex' justify="center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Table dataSource={todos} columns={FORM_COLUMNS} />
        </Col>
      </Row>
    </TodoContext.Provider>
  );
}

export default App
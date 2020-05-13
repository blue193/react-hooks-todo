import React, { useState, useContext } from 'react'
import { Button, Form, Row, Typography } from 'antd'

import { Calendar } from './Calendar.component'
import { FormInput } from './FormInput.component'
import axios from 'axios'

import { TodoContext } from '../../App'

const { Title } = Typography

export const TodoForm = () => {
    const [form, setForm] = useState()
    const [date, setDate] = useState()
    const [, dispatchTodos] = useContext(TodoContext)

    const hasDate = date ? true : false;

    const formSubmit = () => {
        if (form && date && form.length >= 5) {
            axios.post('http://localhost:7000/api/v1/todo', {title: form, date: date})
                .then(res => {
                    dispatchTodos({ type: 'ADD_TODO', payload: res.data})
                })
        } else {
            console.log('Titile must be a minumum of 5 letters')
        }
    }

    return (
        <Form onFinish={formSubmit}>
            <Title data-testid="todo" level={4}>
                Add Todo Item
            </Title>
            <Row type="flex" justify="center">
                <FormInput data-testid="todo" setForm={setForm} />
                {form && form.length >= 5 ? <Calendar setDate={setDate} /> : null }
                {form && form.length < 5 ? 
                   <Title className="Titlelength" type="danger" level={4}> 
                    Length must be more than 5.
                    </Title>
                    : null
                }
            </Row>
            <Row>
                <Button type="primary" htmlType="submit" block disabled={!hasDate}>
                    Add Todo
                </Button>
            </Row>
        </Form>
    )
}
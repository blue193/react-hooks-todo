import React, { useContext } from 'react'
import { TodoContext } from '../../App'
import axios from 'axios'

import { Popconfirm, Button } from 'antd'

export const Delete = ({ record }) => {
    const [, dispatchTodos] = useContext(TodoContext)

    return (
        <Popconfirm
            title="Are you sure you want to delete?"
            onConfirm={() => {
                axios.delete(`http://localhost:7000/api/v1/todos/${record._id}`)
                    .then(res => {
                        dispatchTodos({type: 'DELETE_TODO', payload: res.data })
                    })
            }}
        >
            <Button type="primary" danger>
                Delete
            </Button>
        </Popconfirm>
    )
}
import { v4 as uuidv4 } from 'uuid'

export const todoReducer = (state, action) => {

    switch (action.type) {
        case 'LOAD_TODO':
            action.payload.map(res => res.key = uuidv4())
            return [...state, ...action.payload]
        case 'ADD_TODO':
            console.log('current state = ', state)
            action.payload.key = uuidv4()
            return [...state, action.payload]
        case 'DELETE_TODO':
            action.payload.map(res => res.key = uuidv4())
            return action.payload
        case 'LOAD_FAILURE':
        default:
            throw new Error()
    }
}
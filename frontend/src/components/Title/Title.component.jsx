import React from 'react'
import {Typography} from 'antd'

const {Paragraph} = Typography

export const Title = ({children, record}) => {
    return (
        <Paragraph
            className={record.completed === 'true'
                ? 'true'
                : 'false'
        }>
        { children }
        </Paragraph>
    )
}
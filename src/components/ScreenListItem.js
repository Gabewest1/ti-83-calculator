import React from "react"
import styled from "styled-components"

let ListItem = styled.li`
    list-style: none;
`

let Bullet = styled.span`
    margin-right: .8em;
`

export default (props) => {
    let { item, index } = props

    return (
        <ListItem>
            <Bullet>{index}:</Bullet>
            {item}
        </ListItem>
    )
}
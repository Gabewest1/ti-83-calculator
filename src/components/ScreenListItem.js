import React from "react"
import styled from "styled-components"
import alphabet from "alphabet"

let ListItem = styled.li`
    list-style: none;

`

let Bullet = styled.span`
    margin-right: .8em;
    ${(props) => props.active && `
        color: #808080;
        background-color: #1a1a1a;
    `}
`
let Colon = styled.span`
    font-size: 1.5em
    line-height: 0%;
`

export default (props) => {
    let { item, index, active } = props
    index++

    if(index === 10) {
        index = 0
    } else if(index > 10) {
        let remainder = index - 10
        index = alphabet.upper.join("").charAt(remainder-1)
    }

    return (
        <ListItem>
            <Bullet active={active}>{index}<Colon>:</Colon></Bullet>
            {item}
        </ListItem>
    )
}
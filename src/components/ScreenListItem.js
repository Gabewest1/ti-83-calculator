import React from "react"
import styled from "styled-components"

let Wrapper = styled.div``

let ListItem = styled.li`

`

let Bullet = styled.span`

`

export default (props) => {
    let { item, index } = props

    return (
        <Wrapper>
            <Bullet>{index}:</Bullet>
            <ListItem>{item}</ListItem>
        </Wrapper>
    )
}
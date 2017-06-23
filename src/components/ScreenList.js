import React from "react"
import styled from "styled-components"
import ScreenListItem from "./ScreenListItem"

let List = styled.div`

`
export default (props) => {
    let { items, activeItemIndex } = props

    let listItems = items.map((item, index) => (
        <ScreenListItem key={index} item={item} index={index} active={index === activeItemIndex} />
    ))

    return (
        <List>
            {listItems}
        </List>
    )
}
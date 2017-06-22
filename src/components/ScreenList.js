import React from "react"
import styled from "styled-components"
import ScreenListItem from "./ScreenListItem"

let List = styled.div`

`
export default (props) => {
    let { items } = props
    let listItems = items.map((item, index) => (
        <ScreenListItem key={index} item={item} index={index} />
    ))

    return (
        <List>
            {listItems}
        </List>
    )
}
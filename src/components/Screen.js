import React from "react"
import styled from "styled-components"
import ScreenList from "./ScreenList"

let Container = styled.div`

`
let Titles = styled.nav`
    display: flex;
    font-size: 1.3em;
    margin-bottom: .3em;
`
let Title = styled.span`
    padding: .1em;
    margin-right: .7em;

    ${(props) => props.active && `
        color: #808080;
        background-color: #1a1a1a;
    `}
`
let CurrentList = (props) => {
    let {currentTitleIndex} = props
    let childToRender = props.children[currentTitleIndex]

    return (
        <div>{childToRender}</div>
    )
}
let HighlightActiveTitle = (props) => {
    let {currentTitleIndex} = props
    let childrenToRender = props.children.map((child, i) => {
        return i === currentTitleIndex ? React.cloneElement(child, {active: true}): child
    })

    return (
        <Titles>{childrenToRender}</Titles>
    )
}

export default class Screen extends React.Component {
    createModeScreen() {
        let tabs = this.props.items

        let lists = tabs.map((tab, i) => (
            <ScreenList key={i} items={tab} />
        ))
        
        return (
            <Container>
                {lists}
            </Container>
        )
    }
    createScreen() {
        let {currentItemIndex, currentTitleIndex} = this.props
        let tabs = this.props.items

        let lists = tabs.map((tab, i) => (
            <ScreenList key={i} items={tab.items} activeItemIndex={currentItemIndex} />
        ))

        let titles = tabs.map((tab, i) => <Title key={i}>{tab.title}</Title>)
        
        return (
            <Container>
                <HighlightActiveTitle currentTitleIndex={currentTitleIndex}>
                    {titles}
                </HighlightActiveTitle>
                <CurrentList currentTitleIndex={currentTitleIndex}>
                    {lists}
                </CurrentList>
            </Container>
        )
    }
    render() {
        let {screen} = this.props

        if(screen === "mode") {
            return this.createModeScreen()
        } else {
            return this.createScreen()
        }
    }
}
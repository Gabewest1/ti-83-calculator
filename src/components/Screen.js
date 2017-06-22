import React from "react"
import styled from "styled-components"
import ScreenList from "./ScreenList"

let Container = styled.div`

`
let Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
`
let CurrentList = (props) => {
    let {currentTitle} = props
    let childToRender = props.children[currentTitle]

    return (
        <div>{childToRender}</div>
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
        let tabs = this.props.items

        let lists = tabs.map((tab, i) => (
            <ScreenList key={i} items={tab.items} />
        ))

        let titles = tabs.map((tab, i) => <span key={i}>{tab.title}</span>)
        
        return (
            <Container>
                <Navbar>
                    {titles}
                </Navbar>
                <CurrentList currentTitle={this.props.currentTitle}>
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
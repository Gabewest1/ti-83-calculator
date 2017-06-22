import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Route } from "react-router"

import Screen from "../components/Screen"

import { selectors as calculatorSelectors } from "../redux/Calculator"

class ScreenContainer extends React.Component {
    render() {
        let items = this.props.currentScreen.get("data").toJS()
        
        return (
            <Screen {...this.props} screen={this.props.currentScreen.get("screen")} items={items}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentScreen: calculatorSelectors.selectCurrentScreenData(state),
        currentTitle: state.screenListNavigation.get("currentTitle")
    }
}

function mapDispatchToProps(dispatch) {
    let actions = {}

    return bindActionCreators({...actions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenContainer)
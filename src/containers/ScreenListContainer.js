import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Route } from "react-router"

import ScreenList from "../components/ScreenList"

import { selectors as calculatorSelectors } from "../redux/Calculator"

class ScreenListContainer extends React.Component {
    render() {
        console.log("currentScreen:", this.props.currentScreen)
        let items = this.props.currentScreen.get("data")
        return (
            <div>
                <ScreenList items={items}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        calculatorScreen: state.calculatorScreen,
        statements: calculatorSelectors.selectStatements(state.calculatorScreen),
        isPowerOn: calculatorSelectors.selectPowerStatus(state.calculatorPower),
        isInSecondMode: calculatorSelectors.selectSecondModeStatus(state.calculatorMode),
        isInAlphaMode: calculatorSelectors.selectAlphaModeStatus(state.calculatorMode),
        currentScreen: calculatorSelectors.selectCurrentScreenData(state)
    }
}

function mapDispatchToProps(dispatch) {
    let actions = {}

    return bindActionCreators({...actions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenListContainer)
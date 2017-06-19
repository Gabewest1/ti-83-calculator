import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import Calculator from "../components/Calculator"

import {operations as calculatorActions, selectors as calculatorSelectors} from "../redux/Calculator"

class CalculatorContainer extends React.Component {
    handleButtonClick = (e) => {
        let button = e.currentTarget
        let isNavigationButton = button.getAttribute("data-buttonType") === "navigation"
        console.log(button)
        console.log("isNavigationButton:", isNavigationButton)
        // for(var prop in button) console.log(prop)
        console.log(button.attributes)
        if(isNavigationButton) {
            console.log("Passing on to the navigation method")
            this.handleNavigationButtonClick(button)
        } else {
            this.props.handleButtonClick(button.textContent)
        }
    }
    handleNavigationButtonClick = (button) => {
        let childElement = button.children[0]
        let direction = childElement.getAttribute("direction")
        console.log("THE DIRECTION IS:", direction)
        this.props.handleButtonClick(direction)
    }
    render() {
        return (
            <Calculator onClick={this.handleButtonClick} {...this.props} />
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        calculatorScreen: state.calculatorScreen,
        statements: calculatorSelectors.selectStatements(state.calculatorScreen),
        isPowerOn: calculatorSelectors.selectPowerStatus(state.calculatorPower),
        isInSecondMode: calculatorSelectors.selectSecondModeStatus(state.calculatorMode),
        isInAlphaMode: calculatorSelectors.selectAlphaModeStatus(state.calculatorMode),
    }
}

function mapDispatchToProps(dispatch) {
    let actions = {...calculatorActions}

    return bindActionCreators({...actions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer)
import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import Calculator from "../components/Calculator"

import * as calculatorScreenActions from "../redux/CalculatorScreen"

class CalculatorContainer {
    render() {
        return (
            <Calculator {...this.props} />
        )
    }
}

function mapStateToProps(state) {
    return {
        calculatorScreen: state.calculatorScreen
    }
}

function mapDispatchToProps(dispatch) {
    let actions = {...calculatorScreenActions}

    return bindActionCreators({...actions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
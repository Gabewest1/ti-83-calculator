import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import Calculator from "../components/Calculator"

import {operations as calculatorActions, selectors as calculatorSelectors} from "../redux/Calculator"

class CalculatorContainer {
    render() {
        return (
            <Calculator {...this.props} />
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        calculator: state.calculator,
        characters: calculatorSelectors.selectNumCharacters(state.calculatorScreen)
    }
}

function mapDispatchToProps(dispatch) {
    let actions = {...calculatorActions}

    return bindActionCreators({...actions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
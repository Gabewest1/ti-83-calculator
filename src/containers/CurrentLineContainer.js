import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import CurrentLine from "../components/CurrentLine"

import {operations as currentLineActions, selectors as currentLineSelectors} from "../redux/CurrentLine"
import {operations as calculatorActions, selectors as calculatorSelectors} from "../redux/Calculator"

class CurrentLineContainer extends React.Component {
    render() {
        return (
            <CurrentLine {...this.props} />
        )
    }
}

function mapStateToProps(state) {
    return {
        currentLineText: currentLineSelectors.selectFormattedCurrentLine(state.currentLine),
        cursorIndex: currentLineSelectors.selectCursorIndex(state.currentLine),
        isInSecondMode: calculatorSelectors.selectSecondModeStatus(state.calculatorMode),
        isInAlphaMode: calculatorSelectors.selectAlphaModeStatus(state.calculatorMode),
    }
}

function mapDispatchToProps(dispatch) {
    let actions = {...currentLineActions}

    return bindActionCreators({...actions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentLineContainer)
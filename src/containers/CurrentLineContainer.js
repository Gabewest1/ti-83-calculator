import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import CurrentLine from "../components/CurrentLine"

import {operations as currentLineActions, selectors as currentLineSelectors} from "../redux/CurrentLine"

class CurrentLineContainer extends React.Component {
    render() {
        return (
            <CurrentLine {...this.props} />
        )
    }
}

function mapStateToProps(state) {
    return {
        currentLineText: currentLineSelectors.selectCurrentLine(state.currentLine),
        cursorIndex: currentLineSelectors.selectCursorIndex(state.currentLine)
    }
}

function mapDispatchToProps(dispatch) {
    let actions = {...currentLineActions}

    return bindActionCreators({...actions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentLineContainer)
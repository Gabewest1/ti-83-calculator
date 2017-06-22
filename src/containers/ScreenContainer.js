import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Route, withRouter } from "react-router"

import Screen from "../components/Screen"

import { selectors as calculatorSelectors } from "../redux/Calculator"

class ScreenContainer extends React.Component {
    render() {
        console.log("currentScreen:", this.props.currentScreen)
        let items = this.props.currentScreen.get("data").toJS()
        console.log("All dem items: ", items)
        return (
            <div>
                <Screen {...this.props} screen={this.props.currentScreen.get("screen")} items={items}/>
            </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ScreenContainer))
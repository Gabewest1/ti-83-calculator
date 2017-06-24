import createReducer from "../Utils/createReducer"
import { combineReducers } from "redux"
import { fromJS } from "immutable"
import types from "./types"
import selectors from "./selectors"

const initialCalculatorScreenState = fromJS({
    statements: [],
    previousQuestions: [],
    previousAnswers: [],
    previousQuestionIndex: 0
})
const calculatorScreenReducer = createReducer(initialCalculatorScreenState)({
    [types.CLEAR_SCREEN]: (state, action) => {
        return state.update("statements", (statements) => statements.clear())
    },
    [types.SAVE_ANSWER]: (state, action) => {
        let { answer } = action

        return state.update("previousAnswers", (previousAnswers) => previousAnswers.push(answer))
    },
    [types.SAVE_QUESTION]: (state, action) => {
        let { question } = action

        let stateWithNewQuestion = state.update("previousQuestions", (previousQuestions) => previousQuestions.push(question))
        let numOfQuestions = selectors.selectNumPreviousQuestions(stateWithNewQuestion)

        return stateWithNewQuestion.set("previousQuestionIndex", numOfQuestions-1)
    },
    [types.CREATE_STATEMENT]: (state, action) => {
        let { question, answer } = action
        
        return state.update("statements", (statements) => statements.push({question, answer}))
    },
    [types.DECREMENT_PREVIOUS_QUESTION_INDEX]: (state, action) => {
        return state.update("previousQuestionIndex", (index) => Math.max(index-1, 0))
    }
})

const calculatorPowerInitialState = fromJS({
    isPowerOn: true,
})
const calculatorPowerReducer = createReducer(calculatorPowerInitialState)({
    [types.TOGGLE_POWER]: (state, action) => {
        console.log("is the reducer changin the power state")
        return state.update("isPowerOn", (isPowerOn) => !isPowerOn)
    }   
})

const calculatorModeInitialState = fromJS({
    secondMode: false,
    alphaMode: false,
})

const calculatorModeReducer = createReducer(calculatorModeInitialState)({
    [types.TOGGLE_SECOND_MODE]: (state, action) => state.update("secondMode", (secondMode) => !secondMode),
    [types.TOGGLE_ALPHA_MODE]: (state, action) => state.update("alphaMode", (alpha) => !alpha),
})

const screensInitialState = fromJS({
    currentScreen: window.location.pathname.substr(1),
    currentTitleIndex: 0,
    currentItemIndex: 0,
    screens: [
        {
            screen: "mode",
            data: [
                ["Normal", "Sci", "Eng"], 
                ["Float", "0123456789"],
                ["Radian", "Degree"],
                ["Func", "Par", "Pol", "Seq"],
                ["Connected", "Dot"],
                ["Sequential", "Simul"],
                ["Real", "a+bi", "re^\u03F4i"],
                ["Full", "Horiz", "G-T"]
            ]
        },
        {
            screen: "stat",
            data: [
                {
                    title: "EDIT",
                    items: ["Edit...", "SortA(", "SortD(", "ClrList", "SetUpEditor"]
                },
                {
                    title: "CALC",
                    items: ["1-Var Stats", "2-Var Stats", "Med-Med", "LinReg(ax+b)", "QuadReg", "CubicReg", "QuartReg", "LinReg(a+bx", "LnReg", "ExpReg", "PwrReg", "Logistic", "SinReg"]
                },
                {
                    title: "TESTS",
                    items: ["Z-Test...", "T-Test...", "2-SampZTest...", "2-SampTTest...", "1-PropZTest...", "2-PropZTest...", "ZInterval...", "TInterval...", "2-SampZInt...", "2-SampTInt", "1-PropZInt", "2-PropZInt", "2-SampFTest...", "LinRegTTest...", "ANOVA("]
                }
            ]
        },
        {
            screen: "vars",
            data: [
                {
                    title: "VARS",
                    items: ["Window...", "Zoom...", "GDB...", "Picture...", "Statistics...", "Table...", "String..."]
                },
                {
                    title: "Y-VARS",
                    items: ["Function...", "Parametric...", "Polar...", "On/Off..."]
                }
            ]
        },
        {
            screen: "apps",
            data: [
                {
                    title: "APPLICATIONS",
                    items: ["Finance...", "EasyData", "Prob Sim", "SciTools", "StudyCrd"]
                }
            ]
        },
        {
            screen: "math",
            data: [
                {
                    title: "MATH",
                    items: ["Frac", "Dec", "\u00B9", "\u0606", "\u2093", "fMin(", "fMax(", "fDeriv(", "nDeriv(", "fnInt(", "Solver..."]
                },
                {
                    title: "NUM",
                    items: ["abs(", "round(", "iPart(", "fPart(", "int(", "min(", "max(", "lcm(", "gcd("]
                },
                {
                    title: "CPX",
                    items: ["conj(", "real(", "imag(", "angle(", "abs(", "Rect", "Polar"]
                },
                {
                    title: "PRB",
                    items: ["rand", "nPr", "nCr", "!", "randInt(", "randNorm(", "randBin("]
                },
            ]
        },
        {
            screen: "prgm",
            data: [
                {
                    title: "EXEC",
                    items: []
                },
                {
                    title: "EDIT",
                    items: [],
                },
                {
                    title: "NEW",
                    items: ["Create New"]
                }
            ]
        }
    ]
})

const screenNavigationReducer = createReducer(screensInitialState)({
    [types.SET_CURRENT_SCREEN]: (state, action) => {
        return state.set("currentScreen", action.screen)
    },
    [types.INCREASE_LIST_TITLE_INDEX]: (state, action) => {
        let numOfTitles = selectors.selectNumScreenTitles(state)
        return state.update("currentTitleIndex", (index) => Math.min(index+1, numOfTitles-1))
    },
    [types.DECREASE_LIST_TITLE_INDEX]: (state, action) => {
        return state.update("currentTitleIndex", (index) => Math.max(0, index-1))
    },
    [types.INCREASE_LIST_ITEM_INDEX]: (state, action) => {
        let numOfItems = selectors.selectNumScreenItems(state)
        return state.update("currentItemIndex", (index) => Math.min(index+1, numOfItems-1))
    },
    [types.DECREASE_LIST_ITEM_INDEX]: (state, action) => {
        return state.update("currentItemIndex", (index) => Math.max(0, index-1))
    },
    [types.RESET_LIST_TITLE_INDEX]: (state, action) => {
        return state.set("currentTitleIndex", 0)
    },
    [types.RESET_LIST_ITEM_INDEX]: (state, action) => {
        return state.set("currentItemIndex", 0)
    }
})

export default {
    calculatorScreen: calculatorScreenReducer,
    calculatorPower: calculatorPowerReducer,
    calculatorMode: calculatorModeReducer,
    screenListNavigation: screenNavigationReducer,
}
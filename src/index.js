import React from 'react'
import ReactDOM from 'react-dom'
import App from "./containers/App.js"
import createHistory from "history/createBrowserHistory"
import { Provider } from "react-redux"
import { Route } from "react-router"
import { ConnectedRouter } from "react-router-redux"
import createStoreWithHistory from "./store"
import './index.css'

const history = createHistory()
console.log(history)
const store = createStoreWithHistory(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route component={App} />
    </ConnectedRouter>
  </Provider>
   
  , document.getElementById('root')
)

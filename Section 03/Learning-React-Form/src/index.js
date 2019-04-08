import React from 'react'
import {render}  from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'

const renderApp = (NextAPP) => {
    render(
        <AppContainer>
            <NextAPP />
        </AppContainer>,
        document.querySelector('[data-js="app"]')
    )
}
renderApp(App)

if (module.hot) {
    module.hot.accept('./app', () => {
        const NextAPP = require('./app').default
        renderApp(NextAPP);
    })
}
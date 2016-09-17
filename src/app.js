/**
 * Created by StipJey on 16.09.2016.
 */
import React, { Component } from 'react'
import {render} from 'react-dom'
import CSSModules from 'react-css-modules';
import styles from './app.css'

class Element extends Component {
    render() {
        return <div className="">React Starter Kit MINI</div>
    }
}

const App =  CSSModules(Element, styles);

render(
    <App />,
    document.getElementById('root')
);

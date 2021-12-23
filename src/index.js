import React from 'react'
import ReactDOM from 'react-dom'
import AboutMe from './containers/AboutMe'
import Hobbies from './containers/Hobbies'
import { BrowserRouter, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Paper from '@material-ui/core/Paper'

'/AboutMe'.startsWith('/')
'/AboutMe'.startsWith('/AboutMe')

const AppContainer = () => {
    return (
        <BrowserRouter >
            <Paper style={{background: 'black', padding: 5, marginBottom: 10}} >
                <NavBar />
            </Paper>
            <Paper style={{background: 'grey', padding: 5, marginBottom: 10}} >
                <Route component={AboutMe} exact={true} path='/'/>
                <Route component={Hobbies} path='/Hobbies'/>
            </Paper>
        </BrowserRouter>
    )
}
ReactDOM.render(<AppContainer />, document.querySelector('#root'))
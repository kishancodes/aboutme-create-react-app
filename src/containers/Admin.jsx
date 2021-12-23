import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import Hobbies from './Hobbies'
import AboutMe from './AboutMe'


const Admin = () => {
    const { path } = useRouteMatch()
    return (
        <>
        <Route component={AboutMe} path={`${path}/AboutMe`} />
        <Route component={Hobbies} path={`${path}/Hobbies`} />

        </>
    )
}

export default Admin
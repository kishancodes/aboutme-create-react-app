import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const buttonStyle = {
    marginRight: 10 //'10px'
}

class NavBar extends React.Component {
    
    render (){
        return (
            <div align='center'>   
                <Link to='/'>
                    <Button style={buttonStyle} variant="contained" color="primary">About Me</Button>
                </Link>
                <Link to='/Hobbies'>
                    <Button style={buttonStyle} variant="contained" color="primary">Hobbies</Button>
                </Link>
            </div>
        )
    }
}
export default NavBar
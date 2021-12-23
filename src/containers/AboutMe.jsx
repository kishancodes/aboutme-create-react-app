import React from 'react'
import Paper from '@material-ui/core/Paper'
import aboutMe from '../api/aboutme'
const AboutMe = () => {

    return (
<>
<Paper style={{marginTop: 10, padding: 5}}>
{aboutMe}
</Paper>
</>
    )
}

export default AboutMe
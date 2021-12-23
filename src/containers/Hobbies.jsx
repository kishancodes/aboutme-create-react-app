import React from 'react'
import Paper from '@material-ui/core/Paper'
import h1 from './Images/H1_ftbl.jpg'
import h2 from './Images/H2_ckt.jpg'
import h3 from './Images/H3_crl.gif'
import h4 from './Images/H4_hp.jpg'
import h5 from './Images/H5_f1.jpg'
import h6 from './Images/H6_vb.jpg'
import h7 from './Images/H7_cg.png'


const Hobbies = () => {

    return(
        <>
        <Paper style={{marginTop: 10, padding: 5}}>
        <div align='center'>
            Watching Football
            <br />
            <img src={h1}  style={{width: 300, height: 200}}  alt="Football" />
            <br /><br />
        </div>
        <div align='center'>
            Watching Cricket
            <br />
            <img src={h2}  style={{width: 300, height: 200}}  alt="Cricket" />
            <br /><br />
        </div>
        <div align='center'>
            Watching Curling
            <br />
            <img src={h3}  style={{width: 400, height: 200}}  alt="Curling" />
            <br /><br />
        </div>
        <div align='center'>
            Watching Half Pipe Snowboarding
            <br />
            <img src={h4}  style={{width: 400, height: 200}}  alt="HalfPipe" />
            <br /><br />
        </div>
        <div align='center'>
            Watching Formula 1
            <br />
            <img src={h5}  style={{width: 400, height: 200}}  alt="F1" />
            <br /><br />
        </div>
        <div align='center'>
            Playing Volleyball
            <br />
            <img src={h6}  style={{width: 300, height: 200}}  alt="volleyball" />
            <br /><br />
        </div>
        <div align='center'>
            Playing CS:GO
            <br />
            <img src={h7}  style={{width: 300, height: 200}}  alt="CS:GO" />
            <br /><br />
        </div>
        </Paper>
        </>
    )
}
export default Hobbies
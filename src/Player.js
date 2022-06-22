import React from 'react'
import Body from './Body'
import './player.css'
import Sidebar from './Sidebar'
import Grid from '@mui/material/Grid';
import Footer from './Footer';


function Player({ spotify }) {
    return (

        <div className='player'>
            <Grid container spacing={0}>
                <Grid item xs={3} md={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={9} md={10}>
                    <Body spotify={spotify} />
                </Grid>
                <Grid item xs={12} >
                    <Footer />
                </Grid>
            </Grid>
        </div>

    )
}

export default Player
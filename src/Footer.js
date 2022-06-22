import React from 'react'
import { Box, FooterMiddle, FooterLeft, FooterRight, Img } from "./FooterStyles";
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Slider } from '@material-ui/core';
import { Grid } from '@mui/material';


function Footer() {
    return (

        <Box>
            <FooterLeft>
                <Img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440' alt='ulbum cover' />
                <div>
                    <h4 style={{ marginBottom: "5px" }}>Pain</h4>
                    <p style={{ fontSize: '12px' }} >Ryan Jones</p>
                </div>
            </FooterLeft>
            <FooterMiddle>
                <ShuffleIcon />
                <SkipPreviousIcon />
                <PlayCircleOutlineOutlinedIcon fontSize="large" />
                <SkipNextIcon />
                <RepeatIcon />
            </FooterMiddle>
            <FooterRight>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item>
                        <Slider style={{ width: 100, color: 'green' }} />
                    </Grid>
                </Grid>
            </FooterRight>
        </Box>

    )
}

export default Footer
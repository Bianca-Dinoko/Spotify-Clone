import React from 'react'
import {
    Container, Bodyinfo, BodyInfoText, Img, H2, Ptag, BodySongs, BodyIcons,
} from './BodyStyles';
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';
import './scrollbar.css'


function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    return (
        <Container>
            <Header spotify={spotify} />

            <Bodyinfo>
                <Img src={discover_weekly?.images[0].url}
                    alt="" />
                <BodyInfoText>
                    <strong>PLAYLIST</strong>
                    <H2>Discover weekly</H2>
                    <Ptag>{discover_weekly?.description}</Ptag>
                </BodyInfoText>
            </Bodyinfo>
            <BodySongs>
                <BodyIcons>
                    <PlayCircleFilledIcon style={{
                        marginRight: '20px',
                        fontSize: '80px',
                        marginLeft: '50px',
                    }} />
                    <FavoriteIcon fontSize='large' style={{ marginRight: '20px' }} />
                    <MoreHorizIcon style={{ marginRight: '20px', }} />
                </BodyIcons>
                {discover_weekly?.tracks.items.map((item) => (
                    <SongRow track={item.track} />
                ))}
                <SongRow />
            </BodySongs>
        </Container>
    )
}

export default Body
import React from 'react'
import { Container, Strong, Hr } from './SidebarStyles';
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';
import './scrollbar.css'

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
        <Container>
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt='spotify-logo'
                style={{
                    objectFit: "contain",
                    height: "70px",
                }}
            />
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

            <br />
            <Strong>PLAYLISTS</Strong>
            <Hr />

            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />
            ))}
        </Container>
    )
}

export default Sidebar
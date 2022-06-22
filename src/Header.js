import React from 'react'
import { Avatar } from "@material-ui/core"
import { Container, HeaderLeft, HeaderRight } from './HeaderStyles'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useDataLayerValue } from './DataLayer';

function Header({ spotify }) {
    const [{ user }, dispatch] = useDataLayerValue();

    return (
        <Container>
            <HeaderLeft>
                <ArrowBackIosIcon />
            </HeaderLeft>
            <HeaderRight>
                <Avatar
                    src={user?.images[0]?.url}
                    alt={user?.display_name} />
                <h4 style={{ marginLeft: '10px' }}>{user?.display_name}</h4>
            </HeaderRight>

        </Container>
    )
}

export default Header
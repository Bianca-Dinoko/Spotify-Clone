import React from 'react'
import {
    Container, Img, SongRowInfo, H1, P

} from './SongrowStyles'

function SongRow({ track }) {

    return (
        <Container>
            <Img src={track?.album?.images[0].url}
                alt='' />
            <SongRowInfo>
                <H1>{track?.name}</H1>
                <P>
                    {track?.artists?.map((artist) => artist?.name).join(", ")} -{" "}
                    {track?.album?.name}
                </P>

            </SongRowInfo>
        </Container>
    )
}

export default SongRow
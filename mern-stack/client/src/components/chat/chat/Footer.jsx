
import {Box, InputBase, styled} from '@mui/material'

import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';


const Container = styled(Box)`
    height: 55px;
    background: #ededed;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 15px;
    & > * {
        margin: 5px;
        color: #919191;
    }

`

const Search = styled(Box)`
    background-color: #ffffff;
    border-radius: 18px;
    width: calc(94% - 100px);
`

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    height: 20px;
    padding-left: 25px;
    font-size: 14px;
`
const CLipIcon = styled(AttachFileOutlinedIcon)`
    transform: rotate(40deg);
`

const Footer = () => {
    return (
        <Container>
        <EmojiEmotionsOutlinedIcon />
        <CLipIcon />

        <Search>
            <InputField
            placeholder='Type a message'/>
        </Search>
            <MicOutlinedIcon />
        </Container>
    )
}

export default Footer;
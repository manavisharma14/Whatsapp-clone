

import { Box, Typography, styled } from '@mui/material'

const Component = styled(Box)`
    height: 45px;
    display: flex;
    padding: 13px 0;
    cursor: pointer;
`;
    
const Image = styled('img') ({
    width: 50,
    height: 50,
    objectFit: 'cover',
    borderRadius: '50%',
    padding: '0 14px'
});



const Conversation = ({user}) => {
    return (
        <Component>
            <Box>
                <Image src={user.picture} alt="dp" />
            </Box>

            <Box>
                <Typography>{user.name}</Typography>
            </Box>
        </Component>
    )
}


export default Conversation;
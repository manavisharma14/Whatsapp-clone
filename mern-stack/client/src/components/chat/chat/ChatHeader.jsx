import { Box, Typography, styled } from "@mui/material";
import { Search, MoreVert } from "@mui/icons-material";

const Header = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;

const Image = styled('img')({
    width: 40,
    height: 40,
    objectFit: 'cover',
    borderRadius: '50%',
    display: 'block' // Ensure no extra spacing or inline issues
});


const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        font-size: 24px;
        color: #000;
    }

`


const Name = styled(Typography)`
    margin-left: 12px;
`;

const Status = styled(Typography)`
    font-size: 12px;
    color: rgba(0, 0, 0, 0.6);
    margin-left: 12px;
`;

const ChatHeader = ({person}) => {
    return (
        <Header>
            <Image src={person.picture} alt="dp" />
            <Box>
                <Name>{person.name}</Name>
                <Status>Offline</Status>
            </Box>
            <RightContainer>
                <Search />
                <MoreVert />
            </RightContainer>
        </Header>
    )
}

export default ChatHeader;

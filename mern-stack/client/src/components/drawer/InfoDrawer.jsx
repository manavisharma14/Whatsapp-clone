import { Drawer, Typography, Box, styled } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


import Profile from './Profile';

const Header = styled(Box)`
    background: #008069;
    height: 107px;
    color: #FFFFFF;
    display:flex;
    & > svg, & > p{
        margin-top: auto;
        padding: 15px;
        font-weight:600;
    }

`

const Component = styled(Box)`
    background : #ededed;
    height: 85%
`

const Text = styled(Typography)`
    font-size: 18px;
`

const drawerStyle = {
    position: 'absolute',
    left: 20,
    top: 28,
    height: '95%',
    width: '30%'
    
};

const InfoDrawer = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: drawerStyle }} // Corrected to use drawerStyle
            style={{zIndex: 1500}}
        >
            <Header>
                <ArrowBackIcon onClick={() => setOpen(false)}/>
                <Text>Profile</Text>
            </Header>

            <Component>
                <Profile />
            </Component>

            {/* Add your drawer content here */}
        </Drawer>
    );
};

export default InfoDrawer;

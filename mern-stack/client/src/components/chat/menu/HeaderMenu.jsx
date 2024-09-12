import { useState } from 'react';
import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem, styled } from "@mui/material";

const MenuOption = styled(MenuItem)`
    font-size: 14px;
    padding: 15px 60px 5px 24px;
    color: #4A4A4A; /* Fixed color value */
`;

const HeaderMenu = ({ setOpenDrawer }) => {
    const [open, setOpen] = useState(null);

    const handleClose = () => {
        setOpen(null);
    };

    const handleClick = (e) => {
        setOpen(e.currentTarget);
    };

    return (
        <>
            <MoreVert onClick={handleClick} />
                
            <Menu
                anchorEl={open}  // Correct anchorEl prop
                keepMounted
                open={open}  // Convert anchorEl to boolean
                onClose={handleClose}
                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuOption onClick={() => {handleClose(); setOpenDrawer(true); }}>Profile</MenuOption>
                {/* Add more MenuOption components here if needed */}
            </Menu>
        </>
    );
};

export default HeaderMenu;

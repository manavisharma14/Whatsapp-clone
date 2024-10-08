import { Dialog, Box , styled} from "@mui/material";
import { useContext } from 'react';
// components

import Menu from './menu/Menu'
import EmptyChat from "./chat/EmptyChat";
import ChatBox from "./chat/ChatBox";
import { AccountContext } from "../../context/AccountProvier";

const Component = styled(Box)`
    display : flex;
    
`

const LeftComponent = styled(Box)`
    min-width: 450px;
`
const RightComponent = styled(Box)`
    width: 78%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0,0,0,0.14)
`


const dialogStyle = {
    height: '95%',
    width: '100%',
    margin: '20px',
    borderRadius : 0,
    maxWidth: '100%',
    boxShadow: 'none',
    overflow: 'hidden',

}


const ChatDialog = () => {
    

    const { person } = useContext(AccountContext);
    return (
    <Dialog
        open={true}
        PaperProps = {{sx:dialogStyle}}
        hideBackdrop={true}
        maxWidth = {'md'}

    >

        <Component>
            <LeftComponent>
                <Menu />
            </LeftComponent>
            <RightComponent>
                { /*<EmptyChat /> */}
                { Object.keys(person).length ? <ChatBox /> : <EmptyChat /> }
            </RightComponent>
        </Component>

    </Dialog>
);
};

export default ChatDialog;

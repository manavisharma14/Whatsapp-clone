import { useContext } from 'react';

// components
import { AppBar, Toolbar, styled, Box} from '@mui/material';

import { AccountContext } from '../context/AccountProvier';
import LoginDialog from "./account/LoginDialog";

import ChatDialog from './chat/ChatDialog';


const StyledComponent = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
 `

const Header = styled(AppBar)`
    height: 125px;
    background-color: #0aa884;
    //box-shadow: none;
    `

const LoginHeader = styled(AppBar)`
    height: 200px;
    background-color: #00bfa5;
    //box-shadow: none;
    `

    const Messenger = () => {
        const { account } = useContext(AccountContext);
    
        
        return (
            <StyledComponent>
                {account ?  
                <>
                 <Header>
                    <Toolbar>

                    </Toolbar>
                </Header>
                <ChatDialog />
                </>
                

                :
                <>
                <LoginHeader>
                    <Toolbar>

                    </Toolbar>
                </LoginHeader>
                <LoginDialog />
                </>
        }
            </StyledComponent>
        );
    };

export default Messenger;
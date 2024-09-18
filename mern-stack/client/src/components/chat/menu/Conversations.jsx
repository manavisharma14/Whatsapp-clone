import { useEffect, useState, useContext } from "react";
import { Box, styled, Divider} from '@mui/material';
import { getUsers } from "../../../service/api";
import { AccountContext } from "../../../context/AccountProvier";

import Conversation from "./Conversation";

const Component = styled(Box)`
    height: 81vh;
    overflow: overlay;
`

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
`


const Conversations = ({text = ''}) => {
    const [users, setUsers] = useState([]);

    const { account } = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            const filteredData = response.filter(user => user.name?.toLowerCase().includes(text.toLowerCase()));            setUsers(filteredData);
        }
        fetchData();
    }, [text]);

    return (
            <Component>
                {
                    users.map(user => (
                        user.sub !== account.sub &&
                        <>
                        <Conversation user={user} /> 
                        <StyledDivider />
                        </>
                    ))
                }
            </Component>
    );
}

export default Conversations;

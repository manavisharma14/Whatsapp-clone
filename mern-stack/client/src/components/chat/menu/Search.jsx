import { Search as SearchIcon } from '@mui/icons-material';
import { InputBase, Box, styled } from '@mui/material';

const Component = styled(Box)`
    background: #fff;
    height: 45px;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    align-items: center;
    width: 100%;  /* Make sure the component spans full width */
`;

const Wrapper = styled(Box)`
    background-color: #f0f2f5;
    position: relative;
    margin: 0 13px;
    width: 100%;
    max-width: 100%;  /* Ensures the wrapper does not exceed 100% width */
    border-raduius : 10px;
    aligh-items: center;
    display: flex;
`;

const Icon = styled(Box)`
    position: absolute;
    height: 100%;
    padding: 6px 10px;
    color: #919191;

`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 16px;  /* Adjusted padding-left for icon */
    padding-left: 65px;
    height: 15px;
    font-size: 14px;
    `;

const Search = () => {
    return (
        <Component>  {/* Ensure the outer box spans 100% width */}
            <Wrapper>
                <Icon>
                    <SearchIcon
                    fontSize='small'
                    />
                </Icon>
                <InputField
                    placeholder='Search or start new chat' 
                />
            </Wrapper>
        </Component>
    );
};

export default Search;

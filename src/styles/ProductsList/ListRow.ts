import styled from 'styled-components';
import StyledComponentsProps from '../StyledComponentsProps';

export const ListRow = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 3px;
    border-bottom: #F6FAFF solid 1px;
    :hover {
      cursor: pointer;
      background: blanchedalmond;
    }
`;


export const ListHeader = styled(ListRow)`
    background: ${(props: StyledComponentsProps) => props.theme.productsList.listHeaderBackground};
    font-family: 'Raleway', sans-serif;
    :hover {
      cursor: initial;
    }
`;
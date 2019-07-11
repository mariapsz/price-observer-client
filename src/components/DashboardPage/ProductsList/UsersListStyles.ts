import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: grid;
  border: #F6FAFF solid 1px;
  padding: 3%;
`;

export const ListRow = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 1%;
    border-bottom: #F6FAFF solid 1px;
`;

export const ListHeader = styled(ListRow)`
    background: #F6FAFF;
`;

export const ListCell = styled.div`
    text-align: left;
    width: 100%;
`;

export const ListHeaderCell = styled(ListCell)`
    :hover {
      background: cadetblue;
      cursor: pointer;
    }
`;

export const IPAdressWrapper = styled.div`
    width: 70%;
`;

export const IPAdressListCell = styled(ListCell)`
    display: flex;
`;

export const RemoveEntireListButton = styled.button`
    width: 20vh;
    height: 6vh;
    border-radius: 20%/50%;
    border: none;
    color: white;
    background-color: #e14e5d;
`;

export const Image = styled.img`
    width: 15vh;
    height: 15vh;
`;

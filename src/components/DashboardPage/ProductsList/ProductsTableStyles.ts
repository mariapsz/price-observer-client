import styled from 'styled-components';

export const Frame = styled.div`
  border: 3px solid #f3f1f0;
  padding: 15px 30px 25px 30px;
  border-radius: 3px;
  margin: 10px 0;
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

// name: string,
//     imgSrc: string,
//     currentPrice: Price,
//     expectedPrice?: Price,
//     sizeOptions?: string[],
//     size?: string,
//     dateOfAdding?: string, //Date,

export const Cell = styled.div`
    text-align: center;
    margin: 3px;
    background: ${(props: CellProps) => props.isHeaderCell ? '#206650' : 'rgba(216, 224, 234, 0.38)'};
    flex-basis: ${(props: CellProps) => {
                switch (props.productProperty) {
                    case 'name':
                        return '200%';
                    default:
                        return '100%';
                }
            }};
    padding: ${(props: CellProps) => {
                switch (props.productProperty) {
                    case 'imgSrc':
                        return '0';
                    default:
                        return '5px';
                }
            }};
    
    -o-object-fit: cover;
    object-fit: cover;
    
`;

interface CellProps {
    isHeaderCell?: boolean;
    productProperty?: string;
}

export const HeaderCell = styled(Cell)`
    :hover {
      background: cadetblue;
      cursor: pointer;
    }
`;

export const ProductNameCell = styled(Cell)`
  
`;

export const IPAdressWrapper = styled.div`
    width: 70%;
`;

export const IPAdressListCell = styled.div`
    display: flex;
`;

export const Image = styled.img`
    width: 15vh;
    height: 15vh;
    object-fit: contain;
    
    @media (max-width: 600px){
        width: 60px;
        height: 60px;
    }
`;

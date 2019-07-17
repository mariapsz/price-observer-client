import styled from 'styled-components';

export const Frame = styled.div`
  border: 3px solid #f3f1f0;
  padding: 15px 30px 25px 30px;
  border-radius: 3px;
  margin: 10px 0;
  
  @media(max-width: 600px) {
    padding: 10px 5px 5px 5px;
  }
`;

export const ListRow = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 3px;
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
    display: flex;
    align-items: center;
    justify-content: ${(props: CellProps) => props.isHeaderCell || props.contentType === 'removeProductButton' ? 'center' : 'flex-start'};
    color: ${(props: CellProps) => props.isHeaderCell ? '#FFF' : 'rgba(216, 224, 234, 0.38)'};
    font-weight: ${(props: CellProps) => props.isHeaderCell ? '500' : 'regular'};
    background: ${(props: CellProps) => props.isHeaderCell ? '#39886f' : 'rgba(216, 224, 234, 0.38)'};
    flex-basis: ${(props: CellProps) => {
    switch (props.contentType) {
        case 'name' :
            return '200%';
        case 'removeProductButton':
            return '20%';
        default:
            return '100%';
    }
}};
    padding: ${(props: CellProps) => props.isHeaderCell ? '15px 2px 15px 2px' : '2px'};
   
    @media(max-width: 750px) {
      font-size: 13px;
    }
    
    @media(max-width: 630px) {
      font-size: 8px;
      padding: ${(props: CellProps) => props.isHeaderCell ? '10px 2px 10px 2px' : '2px'};
    }
    
    @media(max-width: 400px) {
      font-size: 6px;
      padding: ${(props: CellProps) => props.isHeaderCell ? '7px 2px 7px 2px' : '2px'};
      margin: 1.5px;
    }    
`;

interface CellProps {
    isHeaderCell?: boolean;
    contentType?: string;
}

export const IPAdressWrapper = styled.div`
    width: 70%;
`;

export const Image = styled.img`
    width: 100%;
    max-height: 10vh;
    object-fit: contain;
`;

export const TrashIcon = styled.i`
    font-size: 25px;
    color: #b69a74;
    -webkit-transition: color 0.3s;
    -moz-transition:    color 0.3s;
    -ms-transition:     color 0.3s;
    -o-transition:      color 0.3s;
    transition:         color 0.3s;
   
    :hover {
      color: rgb(255,190,158);
    }
    
    @media(max-width: 780px){
      padding: 0 10px; 
    }
    
    @media(max-device-width: 430px){
     font-size: 20px;
    }
`;

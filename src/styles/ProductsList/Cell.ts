import styled from 'styled-components';
import StyledComponentsProps from '../StyledComponentsProps';

export interface CellProps extends StyledComponentsProps {
    isHeaderCell?: boolean;
    contentType?: string;
}

export const Cell = styled.div`
    text-align: center;
    height: ${(props: CellProps) => props.isHeaderCell ? 'auto' : '70px'};
    margin: 3px;
    display: flex;
    align-items: center;    
    font-size: 15px;
    padding: ${(props: CellProps) => props.isHeaderCell ? '15px 2px 15px 2px' : '2px'};
    justify-content: center;
    color: ${(props: CellProps) => props.isHeaderCell ? props.theme.productsList.headerCellColor : props.theme.productsList.customFontColor};
    font-weight: 900;
    background: ${(props: CellProps) => {
    console.log(props.theme.productsList.customCellBackground);
    if (props.isHeaderCell)
        if (props.contentType !== 'removeProductButton' && props.contentType !== 'imgSrc')
            return props.theme.productsList.headerCellBackground;
        else return 'none';
    return props.theme.productsList.customCellBackground;
}};
    
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
        
    :hover {
    background: ${(props: CellProps) => {
    if (props.isHeaderCell)
        if (props.contentType !== 'removeProductButton' && props.contentType !== 'imgSrc')
            return props.theme.productsList.headerCellBackgroundOnHover;
        else return 'none';
    return 'rgba(216, 224, 234, 0.38)';
}
    }};
    cursor:  ${(props: CellProps) => props.isHeaderCell && props.contentType !== 'removeProductButton' && props.contentType !== 'imgSrc' ? 'pointer' : 'inherit'};
    }   
   
    @media(max-width: 800px) {
      font-size: 10px;
    }
    
    @media(max-width: 630px) {
      padding: ${(props: CellProps) => props.isHeaderCell ? '10px 2px 10px 2px' : '2px'};
    }
      
    @media(max-width: 550px) {
      background: ${(props: CellProps) => props.isHeaderCell ? 'none' : 'rgba(216, 224, 234, 0.38)'};
      align-items: ${(props: CellProps) => props.isHeaderCell ? 'flex-start' : 'center'};
      color: ${(props: CellProps) => props.isHeaderCell ? '#135a4a' : 'rgba(13,29,20,0.38)'};       
    }    
    
    @media(max-width: 400px) {
      font-size:  ${(props: CellProps) => props.isHeaderCell ? '7px' : '10px'};
      padding: ${(props: CellProps) => props.isHeaderCell ? '7px 2px 7px 2px' : '2px'};
      margin: 1.5px;
    }      

`;
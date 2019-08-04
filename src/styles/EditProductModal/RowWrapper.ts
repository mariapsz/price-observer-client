import styled from 'styled-components';
import StyledComponentsProps from '../StyledComponentsProps';

export const RowWrapper = styled.div`
  display: flex;
  flex-basis: 15%;
  align-items: center;
  justify-content: center;
  padding: 5px 0 6px 10px;
  width: 100%;
  height: auto;
`;

export const ProductNameRowWrapper = styled(RowWrapper)`
    flex-basis: 20%;
    justify-content: flex-start;
    padding:8px;
    width: -webkit-fill-available;
    background: ${(props: StyledComponentsProps) => props.theme.newProductConfirmation.productNameWrapperBackground};
`;
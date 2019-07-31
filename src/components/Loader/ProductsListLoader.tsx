import {usePromiseTracker} from "react-promise-tracker";
import * as React from 'react';
import {ScaleLoader} from 'react-spinners';
import {LoaderWrapper} from '../../styles/Loader/ProductsListLoader/LoaderWrapper';
import {LoaderProps} from './LoaderProps';

const ProductsListLoader = (props: LoaderProps) => {
    const {promiseInProgress} = usePromiseTracker({area: props.area});

    return (
        (promiseInProgress &&
            <LoaderWrapper>
                <ScaleLoader
                    color={'rgba(255,121,79,0.93)'}
                    width={10}
                    widthUnit={'px'}
                    height={25}
                    heightUnit={'px'}
                />
            </LoaderWrapper>)
        ||
        null
    );
};

export default ProductsListLoader;
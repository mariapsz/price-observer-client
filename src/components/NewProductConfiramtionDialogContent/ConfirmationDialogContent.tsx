import React from 'react';
import {ConfirmationDialogContentProps} from './ConfirmationDialogContentProps';
import {ConfirmationDialogContentState} from './ConfirmationDialogContentState';

export class ConfirmationDialogContent extends React.Component<ConfirmationDialogContentProps, ConfirmationDialogContentState> {

    constructor(props: ConfirmationDialogContentProps) {
        super(props);
        this.state = {
            expectedPriceErrorMessage: '',
        }
    }

    getOptions = (optionsArr: string[]) => (
        optionsArr.map((option: string, i: number) => <option key={i} value={option}>{option}</option>)
    );

    getSizeSelectElement = () => (
        <select onChange={this.props.handleSize}>
            <option disabled selected> select size</option>
            {this.getOptions(this.props.product.sizeOptions!)}
        </select>
    );

    handleExpectedPrice = (e: any) => {
        this.setState({
            expectedPriceErrorMessage: this.props.handleExpectedPrice(e),
        })
    };

    render() {

        return <div>
            <div>
                <img src={this.props.product.imgSrc} alt='product photo' style={{height: '60px', width: '60px'}}/>
            </div>
            {!this.props.product.hasOwnProperty('sizeOptions') ?
                null
                :
                <div>
                    <div>
                        size
                    </div>
                    <div>
                        {this.getSizeSelectElement()}
                    </div>
                </div>
            }
            <div>
                <div>Current price</div>
                <div>{this.props.product.currentPrice.count}</div>
                <div>PLN</div>
            </div>
            <div>
                <div>Expected price</div>
                <input onChange={this.handleExpectedPrice} type='number' min='0' max='1000000'/>
                <div>PLN</div>
                <div>{this.state.expectedPriceErrorMessage}</div>
            </div>
        </div>
    }
}

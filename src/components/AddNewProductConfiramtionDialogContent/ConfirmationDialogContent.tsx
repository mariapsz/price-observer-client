import React from 'react';

export class ConfirmationDialogContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expectedPriceErrorMessage: '',
        }
    }

    getOptions = (optionsArr) => (
        optionsArr.map((option, i) => <option key={i} value={option}>{option}</option>)
    );

    getSizeSelectElement = () => (
        <select onChange={this.props.handleSize}>
            <option disabled selected value> select size</option>
            {this.getOptions(this.props.productInfo.sizeOptions)}
        </select>
    );

    handleExpectedPrice = (e) => {
        this.setState({
            expectedPriceErrorMessage: this.props.handleExpectedPrice(e),
        })
    };

    render() {

        return <div>
            <div>
                <img src={this.props.productInfo.imgSrc} alt='product photo' style={{height: '60px', width: '60px'}}/>
            </div>
            {!this.props.productInfo.hasOwnProperty('sizeOptions') ?
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
                <div>{this.props.productInfo.currentPrice.number}</div>
                <div>PLN</div>
            </div>
            <div>
                <div>Expected price</div>
                <input onChange={this.handleExpectedPrice} type='number'/>
                <div>PLN</div>
                <div>{this.state.expectedPriceErrorMessage}</div>
            </div>
        </div>
    }
}

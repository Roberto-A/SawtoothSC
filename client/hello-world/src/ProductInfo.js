import React, { Component } from 'react';
import './ProductInfo.css';

class ProductInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { infoType: this.props.infoType, value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
            <div className="ProductInfo">
                {this.props.infoType}:&emsp;
                <label>
                    <input 
                        type="text" 
                        value={this.state.value} 
                        onChange={this.handleChange} 
                    />
                </label>
            </div>
        );
    }

    onSubmit() {
        alert('This was submitted: ' + this.state.value);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
}

export default ProductInfo;

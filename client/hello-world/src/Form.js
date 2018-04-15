import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            sku: '',
            model: '',
            size: '',
            manufactureDate: ''
        }
    }

    handleSubmit() {

    }

    render() {
        return (
          <div className="Form">
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <legend>New Item</legend>
              <p>
                <label>Product ID:&emsp;</label>
                <input type="text" name="id"  />
              </p>
              <p>
                <label>SKU:&emsp;</label>
                <input type="text" name="sku" />
              </p>
              <p>
                <label>Model:&emsp;</label>
                <input type="text" name="model" />
              </p>
              <p>
                <label>Size:&emsp;</label>
                <input type="text" name="size" />
              </p>
              <p>
                <label>Manu Date:&emsp;</label>
                <input type="text" name="manufacureDate" />
              </p>

              <input type="submit" value="Submit" />
            </form>
            </div>

          </div>
        );
      }
}

export default Form;
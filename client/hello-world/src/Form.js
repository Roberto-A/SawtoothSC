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
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
      var id = this.state.id;
      var sku = this.state.sku;
      var model = this.state.model;
      var size = this.state.size;
      var manufactureDate = this.state.manufactureDate;
      alert("Product Info\nID: " + id +
        "\nSKU: " + sku +
        "\nModel: " + model +
        "\nSize: " + size + 
        "\nManufacture Date: " + manufactureDate);
      alert("Concatenated:\n" + id + sku + model + size + manufactureDate);
      event.preventDefault();
    }

    render() {
        return (
          <div className="Form">
            <form onSubmit={this.handleSubmit}>
              <legend>New Item</legend>
              <div className="form-group">
                <label>Product ID</label>
                <input 
                  type="text" 
                  name="id"
                  placeholder="Product ID"
                  onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label>SKU:&emsp;</label>
                <input 
                  type="text" 
                  name="sku" 
                  placeholder="SKU"
                  onChange={this.handleChange}/>
              </div>
              <div className="row">
                <div className="col-md">
                  <div className="form-group">
                    <label>Model</label>
                    <input 
                      type="text" 
                      name="model" 
                      placeholder="Model"
                      onChange={this.handleChange}/>
                  </div>
                </div>
                <div className="col-md">
                  <div className="form-group">
                    <label>Size</label>
                    <input 
                      type="number" 
                      min="6" 
                      max="14" 
                      placeholder="Size"
                      name="size" 
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-md">
                  <div className="form-group">
                    <label>Manu Date</label>
                    <input 
                      type="date" 
                      name="manufactureDate" 
                      placeholder="Manufature Date"
                      onChange={this.handleChange}/>
                  </div>
                </div>
              </div>
              <div className="btn-submit">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        );
      }
}

export default Form;
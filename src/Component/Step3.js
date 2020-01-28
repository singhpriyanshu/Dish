import React, { Component } from 'react'
import { Button, Icon } from 'antd';


class Step3 extends Component {
   
     
    render() {
        let {selectDish}=this.props
        return (
            <div>
      <select name="selectDish" defaultValue={selectDish} onChange={this.props.handleChange} style={{ width: 120 }} >
      <option value="Chicken Burger">Chicken Burger</option>
      <option value="Ham Burger">Ham Burger</option> 
      <option value="Cheese Burger">Cheese Burger</option>
      <option value="Ham Burger">Ham Burger</option>
      <option value="Fries">Fries</option>
      <option value="Egg Muffin">Egg Muffin</option>
      <option value="Grilled Sandwich">Grilled Sandwich</option>
      <option value="Veg. Salad">Veg. Salad</option>
      <option value="Corn Soup">Corn Soup</option>
      <option value="Tomato Soup">Tomato Soup</option>
      </select>
      <div style={{displayflex:"100px",marginTop:"50px", marginRight:"100px",paddingTop:"50px"}}>
   Please Select No. of Servings :  
      <input type="number" name="servings"  defaultValue={0} onChange={this.props.handleChange} style={{ width: 90 }}/>
      </div>
      <Button type="primary" style={{margin:"50px"}}> <Icon type="left" />Previous</Button>
      <Button type="primary"> Next <Icon type="right" /></Button>
        </div>
        )
    }
}

export default Step3

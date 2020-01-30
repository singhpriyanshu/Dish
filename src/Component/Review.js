import React, { Component } from 'react'
import { Button, Icon } from 'antd';
import { Row, Col } from 'antd';



export class Review extends Component {
   
    handleSubmit=(e)=>{
        e.preventDefault(); 
        console.log(this.props)
         }  
       
    render() {
        const { selectMeal,selectRestaurant,selectDish,servings}=this.props;
        return (
             <div className="color">
           
    <Row>
      <Col span={24} style={{margin:"30px",display:"flex"}} >Meal : {selectMeal}</Col>
      <Col span={24} style={{margin:"30px",display:"flex"}}>No. of servings :{servings} </Col>
      <Col span={24} style={{margin:"30px",display:"flex"}}>
          Restaurant :{selectRestaurant} </Col>
     <Col span={24} style={{margin:"30px",display:"flex"}}>Dishes : {selectDish}</Col>
    </Row>
    
    <Button type="primary" style={{margin:"50px"}} onClick={()=>this.props.triggerParentUpdate(3)}> <Icon type="left" />Previous</Button>
    <Button onClick={this.handleSubmit} > Submit <Icon type="right" /></Button>
       
   </div>     
     )
    }
}

export default Review

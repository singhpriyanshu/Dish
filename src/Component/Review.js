import React, { Component } from 'react'
import { Button, Icon } from 'antd';
import { Row, Col } from 'antd';



export class Review extends Component {
      
    render() {
        const { selectMeal,selectRestaurant,dishes,selectPeople}=this.props;
        return (
             <div  style={{ textAlign:"initial",  margin:"50px"}}>
           
    <Row>
      <Col  >Meal : {selectMeal}</Col>
        <Col>No. of servings : {selectPeople}</Col>
      <Col>
          Restaurant :{selectRestaurant} </Col>
     <Col>
         Dishes : {dishes.length > 0 ? dishes.map((item,index)=>{
                   return  <div key={index}>
                        <p>{item.dishes}</p>
                        <p>{item.servings}</p>
                    </div>
                  }) :""}
     </Col>
    </Row>
  
    <div style={{padding:"100px"}} >
    <Button type="primary" style={{margin:"20px"}} onClick={()=>this.props.triggerParentUpdate(3)}> <Icon type="left" />Previous</Button>
    <Button onClick={()=>this.props.triggerParentUpdate(5)}> Submit <Icon type="right" /></Button>
   
    </div>
   

     </div>
     )
    }
}

export default Review

 


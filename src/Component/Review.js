import React, { Component } from 'react'
import { Button, Icon } from 'antd';
import { Row, Col } from 'antd';



export class Review extends Component {
    
    render() {
        const {selectMeal,selectRestaurant,selectDish,servings}=this.props;

        return (
             <div className="color">
            
    <Row>
      <Col span={24} style={{margin:"30px",display:"flex"}}>Meal : {selectMeal}</Col>
      <Col span={24} style={{margin:"30px",display:"flex"}}>No. of People :{servings} </Col>
      <Col span={24} style={{margin:"30px",display:"flex"}}>
          Restaurant :{selectRestaurant} </Col>
     <Col span={24} style={{margin:"30px",display:"flex"}}>Dishes : {selectDish}</Col>
    </Row>
    
    <Button type="primary" style={{margin:"50px"}}> <Icon type="left" />Previous</Button>
     <Button type="primary"> Submit <Icon type="right" /></Button>
     
    </div>     
                
                
                
            
        )
    }
}

export default Review

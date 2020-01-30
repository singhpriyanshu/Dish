import React, { Component } from 'react'
import { Button, Icon } from 'antd';

class Step1 extends Component {
   
    render() {
        
        let {selectMeal,selectPeople}=this.props;
        return (
      <div>
          
     <select name="selectMeal" defaultValue={selectMeal} onChange={this.props.handleChange} style={{ width: 120 }} >
      <option value="lunch">lunch</option>
      <option value="dinner">dinner</option> 
      <option value="breakfast">breakfast</option>
     </select> <br/> 

      <div style={{marginTop:"100px",padding:"50px"}}>
      Please Select No. of People : 
      <input type="number" name="selectPeople" defaultValue={selectPeople} onChange={this.props.handleChange} style={{ width: 50 }}/>
     </div>
     
     <Button type="primary" style={{margin:"50px"}} onClick={()=>this.props.triggerParentUpdate(1)}> <Icon type="left" />Previous</Button>
     <Button type="primary" onClick={()=>this.props.triggerParentUpdate(2)}> Next </Button>
     

    
     
     </div>
      
        )
    }
}

export default Step1

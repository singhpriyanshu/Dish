import React, { Component } from 'react'
import Step1 from './Component/Step1'
import Step2 from './Component/Step2'
import Step3 from './Component/Step3'
import Review from './Component/Review'
import { Tabs } from 'antd';

const { TabPane } = Tabs;


class MainTab extends Component {
    constructor(props){
      super(props);
     this.state={
        selectMeal:"",
        selectPeople:"",
        selectRestaurant:"",
        selectDish:"",
        servings:"",
        next:"1"
        
     }
      this.buttonClick = this.buttonClick.bind(this);
    }
  
     buttonClick=(next)=> {
      this.setState({ next});
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value 
            
        });
        
    }
   
    render() {
      
        const {selectMeal,selectPeople,selectRestaurant,selectDish,servings,next}=this.state;
      
        return (
            <div>
      <Tabs 
       activeKey={next.toString()} >
     
      <TabPane tab="Step 1" key="1" counter="1"  >
        <span>Meals :</span>
      <Step1 
       triggerParentUpdate= {this.buttonClick} 
       selectMeal={selectMeal}
       selectPeople={selectPeople}
       handleChange={this.handleChange}
       />
      </TabPane>

     <TabPane tab="Step 2" key="2"   counter="2">
      <Step2 
      triggerParentUpdate= {this.buttonClick}
       selectRestaurant={selectRestaurant}
       handleChange={this.handleChange}
      />
     </TabPane>

     <TabPane tab="Step 3" key="3" counter="3">
       <span>Dish :</span>
     <Step3 
      triggerParentUpdate= {this.buttonClick} 
      selectDish={selectDish}
      servings={servings}
      handleChange={this.handleChange}/>
     </TabPane>

     <TabPane tab="Review" key="4" counter="4">
      <Review 
      triggerParentUpdate= {this.buttonClick}
      selectMeal={selectMeal}
      selectPeople={selectPeople}
      selectRestaurant ={selectRestaurant}
      selectDish={selectDish}
      servings={servings}
      />
    </TabPane>
  </Tabs>
            </div>
        )
    }
}

export default MainTab

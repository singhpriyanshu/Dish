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
        defaultActiveKey:1,
        key:"2"
     }

      this.buttonClick = this.buttonClick.bind(this);
    }


   
    buttonClick=()=> {
      this.setState({ defaultActiveKey:this.state.key});}

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    render() {
      
        const {selectMeal,selectPeople,selectRestaurant,selectDish,servings}=this.state;
        return (
            <div> {console.log(this.state.defaultActiveKey)}
      <Tabs
       defaultActiveKey="1">
     
      <TabPane tab="Step 1" key="1" counter="1"  >
      <Step1 
       triggerParentUpdate= {this.buttonClick } 
       selectMeal={selectMeal}
       selectPeople={selectPeople}
       handleChange={this.handleChange}
       />
      </TabPane>

     <TabPane tab="Step 2" key="2"   counter="2">
      <Step2 
       selectRestaurant={selectRestaurant}
       handleChange={this.handleChange}
      />
     </TabPane>

     <TabPane tab="Step 3" key="3" counter="3">
     <Step3
      selectDish={selectDish}
      servings={servings}
      handleChange={this.handleChange}/>
     </TabPane>

     <TabPane tab="Review" key="4" counter="4">
      <Review
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

import React from 'react';
import './App.css';
import { Component } from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      heightfeet: '',
      heightinch:'',
      weight:'',
    }
    this.handleheightfeetchange=this.handleheightfeetchange.bind(this);
    this.handleheightinchchange=this.handleheightinchchange.bind(this);
    this.handleweightchange=this.handleweightchange.bind(this);
    this.calculateBmi=this.calculateBmi.bind(this);
}
handleheightfeetchange(event){
this.setState({
  heightfeet:event.target.value
});
}
handleheightinchchange(event){
  this.setState({
    heightinch:event.target.value
  });
  }
  handleweightchange(event){
    this.setState({
      weight:event.target.value
    });
  }
  calculateBmi(){
    if(this.state.heightfeet&&this.state.heightinch&&this.state.weight){
      let inches_in_feet=12;
      var height=Number(this.state.heightfeet);
      height*=inches_in_feet;
      height+=Number(this.state.heightinch);
      height*=0.0254;
      let weight=this.state.weight;
      var Bmi=(weight/(height*height));
      Bmi=Bmi.toFixed(2);
      return Bmi;
    }
  }
  getBMIResult(Bmi){
    let bmiresults={
      label:'',
      alertClass:''
    };
    if(Bmi<=18.5){
      bmiresults.label="Under Weight";
      bmiresults.alertClass="alert-danger";
    }
    else if(Bmi<=24.9){
      bmiresults.label="Normal Weight";
      bmiresults.alertClass="alert-success"}
    else if(Bmi<=29.9){
      bmiresults.label="Over Weight";
      bmiresults.alertClass="alert-warning";
    }
    else if(Bmi>=30){
      bmiresults.label="Obesity";
      bmiresults.alertClass="alert-danger";
    }
    else{
      bmiresults.label="BMI";
      bmiresults.alertClass="alert-primary";
    }
    return bmiresults;
    }
  
render(){
  let Bmi=this.calculateBmi();
  let results=this.getBMIResult(Bmi);
  return(
    <div className="App container">
      <div className="row">
        <div className="col-xs-12">
          <h1>BMI Calculator</h1>
        </div>  
      </div>
      <div className="row">
        <div className="col-sm-6">
          <form>
            <div className="form-group">
              <legend>Weight</legend>
              <div className="row">
                <div className="col-sm-12">
                  <input className="form-control" id="bmiweight" type="Number" value={this.state.weight} min="1" max="1000" onChange={this.handleweightchange}/>
                  <label className="control-label" htmlFor="bmiweight">lb</label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <legend>Height</legend>
              <div className="row">
                <div className="col-sm-6">
                  <input className="form-control" id="bmiheightFeet" type="Number" value={this.state.heightfeet} min="1" max="12" onChange={this.handleheightfeetchange}/>
                  <label className="control-label" htmlFor="bmiheightfeet">ft</label>
                </div>
                <div className="col-sm-6">
                  <input className="form-control" id="bmiheightinch" type="Number" value={this.state.heightinch} min="1" max="12" onChange={this.handleheightinchchange}/>
                  <label className="control-label" htmlFor="bmiheightinch">in</label>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-sm-6">
          <BMIDisplay Bmi={Bmi} label={results.label} alertClass={results.alertClass}></BMIDisplay>
        </div>
      </div>
    </div>
  );
}
}
function BMIDisplay(props){
  return(
  <div className={"Bmi result-alert " +props.alertClass}>
    <div>{props.Bmi||"--.-"}</div>
    <div>{props.label}</div>
  </div>
  )
}
export default App;

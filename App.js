import React, { Component } from 'react';
import './App.css';
import Note from './component/notes.js';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      noteText:'',
      notes:[],
  }}
  updateNoteText(noteText){
    this.setState({noteText:noteText.target.value})
  }
  deleteNote(index){
    let notesArr=this.state.notes;
    notesArr.splice(index,1);
    this.setState({notes:notesArr})
  }
  addNote(){
    if(this.state.noteText===''){return}

    let notesArr=this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({noteText:''});
    this.textinput.focus();
  }
  handleKeyPress=(event)=> {
if(event.key==='Enter'){
  let notesArr=this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({noteText:''});
}
  }
  render(){ 
    let notes= this.state.notes.map((val,key) =>{
      return <Note key={key} text={val} deleteMethod= {() => this.deleteNote(key)}/>
    })
    return (  
    <div className="Container">
      <div className="header">React App ToDO Application</div>
      {notes}
        <div className="btn" onClick = {this.addNote.bind(this)}>+</div>
        <input  type="text" placeholder="Enter your List" ref={((input)=>{this.textinput=input})} 
        className="textinput" 
        value={this.state.noteText}
        onChange = {noteText=>this.updateNoteText(noteText)}
        onKeyPress={this.handleKeyPress.bind(this)}></input>
      </div>
  );
} 
}

export default App;

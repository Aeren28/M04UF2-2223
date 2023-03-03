import React from 'react';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Title from './Title';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

import Chip from '@mui/material/Chip';

import './TODO.css';

class App extends React.Component{
  constructor (props){
	super(props);

	this.state = {
	  tasklist: []
	};
  }
  addTask = (task) => {
    console.log(task);

	this.state.tasklist.unshift(task);

	this.setState({
	  tasklist: this.state.tasklist
	});
  }
  
  removeTask = (task_num) => {
	this.state.tasklist.splice(task_num, 1);

	this.setState({
	  tasklist: this.state.tasklist
	});
  }

  render(){

  	return (
    	<Box
		  sx={{
		    display:'flex',
			justifyContent:'center',
			alignItems:'center',
			height:'100%'
		  }}>

		  <Paper elevation={3}>
			<Title text="TODO List"/>
			<TaskForm onAddTask={this.addTask} />
			<TaskList list={this.state.tasklist} onRemoveTask={this.removeTask} />
			<p> Tienes<strong>{this.state.tasklist.length}</strong>tareas pendientes </p>
		  </Paper>
		</Box>
    
  	);
  }
}

export default App;

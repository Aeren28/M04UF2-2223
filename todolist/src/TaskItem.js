import React from 'react';

import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

import Button from '@mui/material/Button';

class TaskItem extends React.Component{
	
	constructor(props){
	  super(props);

	  this.state={
		open: false
	  };
	}

	openDialog = () => {
	  console.log("Borrar");
	  this.setState({
		open:true
	  });
	}

	closeDialog = () => {
	  this.setState({
		open:false
	  });

	}

	removeTask = () =>{
	  this.props.onRemoveTask(this.props.num_task);
	  this.closeDialog();
	}

	render(){
	  return(
	    <ListItem>
		  <ListItemText primary={this.props.text} />
		   <Tooltip onClick={this.openDialog} title="Borrar">
     		 <IconButton>
        	   <DeleteIcon />
      		 </IconButton>
    	   </Tooltip>
		   <Dialog open={this.state.open}>
		     <DialogContent>
			   <DialogContentText>
			     Desea borrar?
			   </DialogContentText>
			 </DialogContent>

			 <DialogActions>
			   <Button color="secondary" onClick={this.closeDialog}>Cerrar</Button>
			   <Button variant="contained" color="error" onClick={this.removeTask}>Borrar</Button>
			 </DialogActions>
		   </Dialog>
		</ListItem>
	  );
	}

}

export default TaskItem;

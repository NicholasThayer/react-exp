import React, {Component} from 'react';

import {Button, /*Icon, Label, Menu,*/ Table} from 'semantic-ui-react';
import {Input} from 'semantic-ui-react';

import moment from 'moment';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

//rewrite this as a pure function.
class EditUpload extends Component {

  //I have java trama
  constructor(props){
    //that was triggering
    super(props)
      //if props.uploads exists this compoenent is used to edit an upload
      //else it creates a new compoenent 
      //I just puked in my mouth a little
      //there's no reason to bring class into this
      //also shouldn't redux be handling state? 

      if(this.props.upload){
        this.state={...this.props.upload}
      }else{
        this.state = {...this.emptyUpload()}
      }
    }

    //create empty
    emptyUpload = () => {
      return {title: "", description: "", date: moment()};
    }

    //input change
    changeNewTitle = (event) => {
      this.setState({title: event.target.value})
    }

    changeNewDescription = (event) => {
      this.setState({Description: event.target.value})
    }
    
    changeNewDate = (event) => {
      this.setState({date: event})
    }
    
    //form submission
    createUpload = (event) => {
      this.resetUpload()
      this.props.createUpload(this.state)
    }

    editUpload = (event) => {
      this.props.editUpload(this.state)
    }

    //indirect input modification
    resetUpload = () => {
      this.setState({title: "", description: "", date: moment()})
    }
    
    cancelEditing = () => {
      this.props.cancelEditing()
    }

    //convert date to moment object for DatePicker
    getDateForDatePicker(){
      return moment(this.state.date)
    }

    render(){
      return(
        <Table.Row>
          <Table.Cell>
            {/*The Value flows the data from the state to the control*/}
            {/*The onChange method pass the value from the Control to the state
            ***It takes a method reference */}
            {/*In this way a controlled two way binding is established
            ***...not sure this is right*/}
            <Input 
              placeholder='title'
              value={this.state.title}
              onChange={this.changeNewTitle}>
            </Input>
          </Table.Cell>
          <Table.Cell>
            <Input 
              placeholder='Description'
              value={this.state.description}
              onChange={this.changeNewDescription}>
            </Input>
          </Table.Cell>
          <Table.Cell>
            {/*DatePicker gets the moment date*/}
            <DatePicker
              selected={this.getDateForDatePicker()}
              onChange={this.changeNewDate}
            />
          </Table.Cell>
          <Options 
            upload={this.props.upload}
            editUpload={this.editUpload}
            createUpload={this.createUpload}
            resetUpload={this.resetUpload}
            cancelEdit={this.cancelEditing}
          />
        </Table.Row>

      )
    }
  }

export default EditUpload;

const Options = (props) => {
  if (props.upload && props.upload.editing){
    return EditOptions(props);
  }else{
    return AddOptions(props);
  }
}

const EditOptions = (props) => {
  return (
    <Table.Cell>
      <Button color='green' onClick={props.editUpload}>
        Edit
      </Button>
      <Button color='blue' onClick={props.cancelUpload}>
        Cancel
      </Button>
    </Table.Cell>
  );
}


const AddOptions = (props) => {
  return (
    <Table.Cell>
      <Button color='green' onClick={props.createUpload}>
        Create
      </Button>
      <Button color='blue' onClick={props.resetUpload}>
        Reset
      </Button>
    </Table.Cell>
  );
}
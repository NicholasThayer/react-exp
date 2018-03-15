import React, { Component } from 'react';
import * as UploadActions from '../actions/uploadActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import UploadTable from '../components/file-upload/upload-table';

//ughhh with the classes again
export class UploadContainer extends Component {
  /*
  constructor(props){
    super(props)
  }
  */

  //create
  createUpload = (upload) => {
    this.props.actions.CreateUpload(upload)
  }

  //update
  startEditing = (id) => {
    this.props.actions.StartEditing(id)
  }

  cancelEditing = (id) => {
    this.props.actions.CancelEditing(id)
  }
  editUpload = (upload) => {
    this.props.actions.UpdateUpload(upload)
  }
  completeUpload = (upload) => {
    this.props.actions.UpdateUpload({...upload, status: 'done'})
  }
  //update

  //delete
  deleteUpload = (upload) => {
    this.props.actions.DeleteUpload(upload)
  }


  render(){
    return (
      <div>
        <UploadTable
          uploads={this.props.uploads}
          createUpload={this.createUpload}
          startEditing={this.startEditing}
          cancelEditing={this.cancelEditing}
          editUpload={this.editUpload}
          completeUpload={this.completeUpload}
          deleteUpload={this.deleteUpload}
          />
      </div>
    );  
  }
}


//define the property types of container component
UploadContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  uploads: PropTypes.array.isRequired
}

//map state => component props
function mapStateToProps(state, ownProps) {
  return{
    uploads: state.uploads
  }
}

//map dispatch => component props

function mapDisbatchToProps(dispatch){
  return {
    actions: bindActionCreators(UploadActions, dispatch)
  }
}


// The connect function connects the Redux Dispatch and state to the Todo Container Component.
// Without this the Component wont be functional.

export default connect(mapStateToProps, mapDisbatchToProps)(UploadContainer);
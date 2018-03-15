import React/*, {Component}*/ from 'react';

import {/*Button, Icon, Label, Menu,*/ Table} from 'semantic-ui-react'
import UploadRow from './upload-row'
import EditUpload from './edit-upload'

//tfsc it's a stateless component

const UploadTable = (props) => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Options</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {/*maps recieved props to uploads*/}
        {
          props.uploads.map(u => {
            //if upload is being edited render EditUpload
            if(u.editing){
              return <EditUpload
                editUpload={props.editUpload}
                cancelEditing={e => props.cancelEditing(u._id)}
                key={u._id}
                upload={u}
                />

            } else {
              return <UploadRow
                upload={u}
                key={u._id}
                completeUpload={e => props.completeUpload(u)}
                startEditing={e => props.startEditing(u._id)}
                deleteUpload={e => props.deleteUpload(u)}
                />
            }
          })
        }
        {/*This EditTodo component is used as a Create new Todo Component*/}
        {/*Thus by using the same component for both use, we can reuse a lot of the codes*/}
        <EditUpload createUpload={props.createUpload}/>
      </Table.Body>
    </Table>
  );
}

export default UploadTable;
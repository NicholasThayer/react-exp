import React/*, {Component}*/ from 'react';
import {Button, Table} from 'semantic-ui-react';

const UploadRow = (props) => {
  return (
    <Table.Row className={ getClassName(props) }>
      <Table.Cell>props.upload.title</Table.Cell>
      <Table.Cell>props.upload.description</Table.Cell>
      <Table.Cell>props.upload.date</Table.Cell>
      <Table.Cell className="options">{
        props.upload.status !== 'done' && <Button 
          className="option-buttons" 
          color='green' 
          onClick={props.completeUpload}>
          <i className="fa fa-check"></i>
        </Button>}
        <Button className="options-buttons" color='blue' onClick={props.startEditing}>
          <i className="fa fa-pencil"></i>
        </Button>
        <Button className="options-buttons" color='blue' onClick={props.deleteUpload}>
          <i className="fa fa-trash"></i>
        </Button>
      </Table.Cell>
    </Table.Row>
  )
}

const getClassName = (props) => {
  return `

    ${props.upload.updating
      ? "updating"
      : ""}
    ${props.upload.status === 'done'
      ? "done"
      : ""}
    ${props.upload.deleting === 'done'
      ? "deleting"
      : ""}

  `
}

export default UploadRow;
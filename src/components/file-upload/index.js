import React/*, { Component }*/ from 'react';
import { isObject, isArray/*, forEach*/ } from 'lodash';
import Dropzone from 'react-dropzone';


/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <FileUpload>
            dropzone shit
          </FileUpload>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/


//redux shit
const FILE_UPDATE = 'FILE_UPDATE';
const initialState = { accepted: [], rejected: [] };

function reducer( state, action ) {
  // body...
  const { file } = action;
  switch (action.type) {
      case FILE_UPDATE:
        return {
          ...state,
          file
        };
      default:
        return state;
  }
}

const updateAction = {
  type: FILE_UPDATE,
  file: 'this is totally a file'
}

const newState = reducer(initialState, updateAction)

console.assert(!isObject(initialState), 'initialState must be an object')
console.assert(!isArray(initialState.accepted), 'initialState.accepted must be an object')
console.assert(!isArray(initialState.rejected), 'initialState.rejected must be an object')

//rewrite this as a pure function of state
class FileUpload extends React.Component {
  constructor() {
    super()
    this.state = {
      accepted: [],
      rejected: []
    }
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone
            accept="image/jpeg, image/png"
            onDrop={(accepted, rejected) => { 
              console.log('dropped')

              this.setState({ accepted, rejected });

            }}
            onDropAccepted={() => {
              console.log('accepted', this.state.accepted.length);

              //this.state.accepted[0]
            }}
          >
            <p>Try dropping some files here, or click to select files to upload.</p>
            <p>Only *.jpeg and *.png images will be accepted</p>
          </Dropzone>
        </div>
        <aside>
          <h2>Accepted files</h2>
          <ul>
            {
              this.state.accepted.map((f, i) => <li key={f.name}> {i} {f.name} - {f.size} bytes</li>)
            }
          </ul>
          <h2>Rejected files</h2>
          <ul>
            {
              this.state.rejected.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        </aside>
      </section>
    );
  }
}

export default FileUpload;
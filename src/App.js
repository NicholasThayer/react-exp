import React/*, { Component }*/ from 'react';
//import logo from './logo.svg';
//import AppBar from 'material-ui/AppBar';

//this might be fucked, check https://github.com/nomanHasan/todo-api for styles
import './App.css'; 

//file upload component
//import FileUpload from './components/file-upload'

//routes
import { Routes } from './Routes'

//Provider sets up the Redux Store
import { Provider } from 'react-redux'

//store configuration
import {configureStore} from './store/configureStore';

//redux actions
import * as UploadActions from "./actions/uploadActions";


const store = configureStore();

//dispatch a get Uploads action to retrieve uploads from the server at startup
store.dispatch(UploadActions.GetUploads())

const App = (props) => {
  return (
    //components access store through the provider
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

/*

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <FileUpload>
        dropzone area
        </FileUpload>
      </div>
    );
  }
}

*/

export default App;
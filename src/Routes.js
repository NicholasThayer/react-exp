import React/*, { Component }*/ from 'react';
import { BrowserRouter, Switch, Route/*, Link*/ } from 'react-router-dom'

//upload container component
//should maybe group this in ./components/file-upload 
import UploadContainer from './containers/upload-container'

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component = {UploadContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export {Routes}
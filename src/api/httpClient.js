import axios from 'axios';
//import socketServer from './socket-server'


//axios http client.  stub funcitons.
const post = (url = '', data = '', config = {}) => {
  console.log('post')
  return axios.post(url, data, config).catch((error) => {
    console.log(error);
  })
}

const get = (url) => {
  return axios(url)
}

const put = (url = '', data = '', config = {}) => {
  return axios.put(url, data, config)
}


//delete is a keyword using del.

const del = ( url = '', data = '', config = {}) => {
  return axios.delete(url, data, config)
}


//export json object

export const HttpClient = {
    post,
    get,
    put,
    delete: del
}
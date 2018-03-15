import {HttpClient} from './httpClient';

//temp api backend... total crap but w/e
//constants
const PORT = '3000';
const API = `http://localhost:${PORT}`;
const UPLOAD_API = `${API}/uploadApi`;


//uploads crud

//create
const createUpload = upload => {
  return HttpClient.post(UPLOAD_API, upload)
}

//read
const getUpload = () => {
  return HttpClient.get(UPLOAD_API)
}

//update
const updateUpload = upload => {
  HttpClient.put(UPLOAD_API, upload)
}

//delete 
const removeUpload = upload => {
  return HttpClient.delete(`${UPLOAD_API}/${upload.id}`)
}

const UploadApi = { createUpload, getUpload, updateUpload, removeUpload }

//export json object
export default UploadApi; 
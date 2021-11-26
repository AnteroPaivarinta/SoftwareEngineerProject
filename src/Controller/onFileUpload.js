
import axios from 'axios';


const onFileUpload = (files, length)=> {
         
  const config={
    header:{"Content-Type": "multipart/form-data",Accept: 'application/json'
  }
  }
    console.log("Test: ", files.name)
    const formData = new FormData(); 
    formData.append('file', files);
  

 
axios.post("http://94.237.116.244:5555/uploads", formData, {
  headers: config
})
.then((response) => {
  console.log("Succesful")
})
.catch((error) => {
  console.log("ERROR: ", error)
})





};


 export default onFileUpload;
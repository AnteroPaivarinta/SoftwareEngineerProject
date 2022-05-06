
import axios from 'axios';
const link;   //define link

const onFileUpload = (files, length)=> {
         
  const config={
    header:{"Content-Type": "multipart/form-data",Accept: 'application/json'
  }
  }
    console.log("Test: ", files.name)
    const formData = new FormData(); 
    formData.append('file', files);
  

 
axios.post("link/uploads", formData, {
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

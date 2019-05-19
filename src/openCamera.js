
const openCamera = (callback)=>{
    navigator.mediaDevices.getUserMedia({audio:false,video:true})
    .then(stream=>{
        callback(stream);
    })
    .catch(err=>console.log(err));
}

module.exports = openCamera;
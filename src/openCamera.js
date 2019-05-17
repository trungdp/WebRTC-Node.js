const playVideo = require('./playVideo');
const openCamera = ()=>{
    navigator.mediaDevices.getUserMedia({audio:false,video:true})
    .then(stream=>{
        playVideo(stream,"streamVideo");
    })
    .catch(err=>console.log(err));
}

module.exports = openCamera;
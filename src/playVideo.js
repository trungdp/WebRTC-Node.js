const playVideo = (stream, idElement)=>{
    const video = document.getElementById(idElement);
        video.srcObject = stream;
        video.onloadedmetadata = ()=>{
            video.play();
        }
}

module.exports = playVideo;
const openCamera = require('./openCamera');
const $ = require('jquery');
const Peer = require('simple-peer');
const playVideo = require('./playVideo');

openCamera((stream) => {
    const p = new Peer({ initiator: location.hash === "#1", trickle: false, stream: stream });
    playVideo(stream, "streamVideo");

    p.on('signal', token => {
        $("#txtSignal").val(JSON.stringify(token))
    });

    p.on('stream',friendStream=>playVideo(friendStream,'friendVideo'));

    $('#btn-Connect').click(() => {
        const friendSignal = JSON.parse($('#friendSignal').val());
        p.signal(friendSignal);
    })
});




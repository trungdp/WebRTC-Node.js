const openCamera = require('./openCamera');
const $ = require('jquery');
// openCamera();

const Peer = require('simple-peer');

const p = new Peer({initiator: location.hash === "#1",trickle :false});

p.on('signal',token=>{
    $("#txtSignal").val(JSON.stringify(token))
});

p.on('connect',token=>{
    setInterval(()=>console.log(Math.random()),3000);
    
});

p.on('data',data=>{
    console.log(data);
});

$('#btn-Connect').click(()=>{
    const friendSignal = JSON.parse($('#friendSignal').val());
    p.signal(friendSignal);
})
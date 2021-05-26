const socket = io();

const text = document.getElementById('client_message').value;
const email = document.getElementById('client_email').value;

socket.on('connect', () => {
    const params = {
        text: text,
        email: email
    };
    
    socket.emit('client_first_message', params);
});


document.getElementById('send_message_button').addEventListener('click', event => {

});
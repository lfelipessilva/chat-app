let socket = null;

document.querySelector('#start_chat_button').addEventListener('click', (thing) => {
    socket = io.connect('http://localhost:3001');

    const email = document.getElementById('client_email').value;
    const text = document.getElementById('client_message').value;

    socket.on('connect', () => {    
        const params = {
            email,
            text
        };
        
        console.log(email, text);
        socket.emit('client_first_message', params, (call, error) => {
            if (error) {
                console.error(error);
            } else {
                console.log(call);
            };
        });
    });
});

//document.getElementById('send_message_button').addEventListener('click', event => {
//
//});
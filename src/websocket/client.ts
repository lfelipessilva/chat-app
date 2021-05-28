import { io } from '../http';
import { findUserByEmail, createUser } from '../services/UserService';
import { createConnection, findConnectionByUserId, findAllWhitoutAdmin } from '../services/ConnectionService';
import { createMessage, findMessagesByUserId } from '../services/MessageService';

io.on('connect', (socket) => {
    socket.on('client_first_message', async (params) => {
        const socket_id = socket.id;
        
        const { text, email } = params;

        //a conexão se cria para verificar se o usuario ja está sendo atendido, ela tem o id da conexão do usuario e, se não estiver 
        //sendo atendido o admin_id é igual a null, isto serve para que todos sejam mostrados corretamente na tela do admin.
        const userExists = await findUserByEmail(email);
        
        let userId = null;
        if(!userExists) {
            //se usuario não existe ele cria o usuario e uma conexão para ele
            const newUser = await createUser(email);
            userId = newUser.user_id;

            await createConnection(userId, socket_id);
        } else {
            //se o usuario existe ele encontra o usuario por id e verifica se ele ja tem alguma conexão
            userId = userExists.user_id;

            const connection = await findConnectionByUserId(userId);
            //outa conexão é criada para que o usuario não tenha admin(não esteja sendo atendido)
            await createConnection(userId, socket_id);
        }

        const message = await createMessage(userId, text);

        //procura todas as mensagens do usuario para que elas apareçam na sua tela e na tela do admin
        const allUserMessages = await findMessagesByUserId(userId);
        socket.emit('list_user_messages', allUserMessages);

        //envia para todos os usuarios conectados a lista atualizada de usuarios sem admin
        const usersWhitoutAdmin = await findAllWhitoutAdmin();
        io.emit('list_users_whitout_admin', usersWhitoutAdmin);
    });
});
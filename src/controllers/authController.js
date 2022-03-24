const usuarios = require('../../usuarios.json');

// request.body = {
//     login: 'alguma_coisa',
//     senha: 'alguma_senha',
//     email: 'teste'
// }

// Forma tradicional
// // const login = request.body.login;
// // const senha = request.body.senha;


// Usando desestruturação (Forma utilizada no mercado)
// const {login, senha, email} = request.body

const authController = {
    show: (request, response) => {
        response.render('login');
    },
    login: (request, response) => {
        // Desestruturacao
        const { login, senha } = request.body;

        // Usamos o find, para o primeiro que encontrar, ele já retorna para a 
        // variavel usuarioEncontrado
        const usuarioEncotrado = usuarios.find((usuario) => usuario.login === login);

        console.log(usuarioEncotrado);

    },
}

module.exports = authController;

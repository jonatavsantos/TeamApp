function isAuthenticated() {
    if(!getToken()) {
        window.location.href = '/login'
    } else {
        return true;
    }
}

function getToken() {
    try {
        return localStorage.getItem('TeamApp:token');
    } catch (error) {
        console.error('Erro ao obter token do localStorage:', error);
        return null;
    }
}

function login(token) {
    try {
        localStorage.setItem('TeamApp:token', token);
        window.location.href = '/start';
    } catch (error) {
        console.error('Erro ao definir token no localStorage:', error);
    }
}

function logout() {
    try {
        localStorage.removeItem('TeamApp:token');
        window.location.href = '/login';
    } catch (error) {
        console.error('Erro ao remover token do localStorage:', error);
    }
}

export default { isAuthenticated, getToken, login, logout }
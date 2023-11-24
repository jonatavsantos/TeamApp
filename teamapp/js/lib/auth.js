function isAuthenticated() {
    if(!getToken()) {
        window.location.href = '/login'
    } else {
        return true;
    }
}

function getToken() {
    return localStorage.getItem('TeamApp: token');
}

function login(token) {
    localStorage.setItem('TeamApp: token', token);

    window.location.href = '/start';
}

function logout() {
    localStorage.removeItem('TeamApp: token');

    window.location.href = '/login';
}

export default { isAuthenticated, getToken, login, logout }
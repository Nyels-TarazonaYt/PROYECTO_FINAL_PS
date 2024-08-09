function loginUser(username, password) {
    const users = [
        { username: 'usuario1', password: 'password1' },
        { username: 'usuario2', password: 'password2' }
    ];

    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        return { success: true, message: 'Login successful!' };
    } else {
        return { success: false, message: 'Invalid username or password.' };
    }
}

module.exports = { loginUser };

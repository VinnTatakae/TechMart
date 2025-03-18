// JavaScript untuk mengaktifkan visibilitas kata sandi
document.getElementById('showPassword').addEventListener('change', function () {
    const passwordField = document.getElementById('password');
    passwordField.type = this.checked ? 'text' : 'password';
});

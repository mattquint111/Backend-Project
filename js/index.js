const passwordInput = document.getElementById('passwordInput')
const showPasswordBtn = document.getElementById('showPasswordBtn')
const confirmPasswordInput = document.getElementById('confirmPasswordInput')
const showComfirmPasswordBtn = document.getElementById('showConfirmPasswordBtn')

showPasswordBtn.addEventListener('click', () => {
    if (passwordInput.type == "password") {
        passwordInput.type = 'text'
    } else {
        passwordInput.type = 'password'
    }
})

showComfirmPasswordBtn.addEventListener('click', () => {
    if (confirmPasswordInput.type == "password") {
        confirmPasswordInput.type = 'text'
    } else {
        confirmPasswordInput.type = 'password'
    }
})
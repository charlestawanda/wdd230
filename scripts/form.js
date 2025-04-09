const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        const passwordError = document.getElementById('passwordError');

        confirmPassword.addEventListener('input', function() {
            if (confirmPassword.value !== password.value) {
                passwordError.textContent = "Passwords do not match.";
                password.focus();
                password.value = '';
                confirmPassword.value = '';
            } else {
                passwordError.textContent = '';
            }
        });
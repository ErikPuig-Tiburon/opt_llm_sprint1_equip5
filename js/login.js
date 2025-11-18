document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const error = document.getElementById('error');

  const emailCorrecte = /^[A-Za-z0-9._%+-]+@montsia30\.net$/.test(email);
  const contrasenyaCorrecta = password.length >= 8
                              && /[A-Z]/.test(password)
                              && /[a-z]/.test(password)
                              && /\d/.test(password);

  if (!emailCorrecte) {
    error.textContent = 'El correu ha de ser del domini montsia30.net';
  }
  else if (!contrasenyaCorrecta) {
    error.textContent = 'La contrasenya ha de tenir 8 caràcters, majúscula, minúscula i número';
  }
  else {
    window.location.href = "intranet.html";
  }
});

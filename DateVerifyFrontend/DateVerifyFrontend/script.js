function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  if (username && password) {
    alert('Login Successful! (In real app, move to Home Page)');
    // Later: Redirect to Home Page
  } else {
    alert('Please enter both username and password');
  }
}

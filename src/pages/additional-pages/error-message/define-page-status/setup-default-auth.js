function setupDefaultAuth() {
  localStorage.setItem('hasAuthorized', 'false');
  console.log(
    `setup-default-auth.js: ${localStorage.getItem('hasAuthorized')}`
  );
}

export default setupDefaultAuth;

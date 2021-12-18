function handleCredentialResponse(response) {}
window.onload = function () {
  google.accounts.id.initialize({
    client_id:
      "796237878385-cksg8op81i5cmdtd4aivqlnbm2csb2mg.apps.googleusercontent.com",
    callback: handleCredentialResponse,
  });
  google.accounts.id.renderButton(document.getElementById("buttonDiv"), {
    theme: "outline",
    size: "large",
    width: 50,
  });
  google.accounts.id.prompt();
};

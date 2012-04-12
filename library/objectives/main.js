require(['session', 'text!sign-in.html'], function (session, sign_in_template) {
  var $main;
  $(document).ready(identify);

  function identify() {
    $main = document.getElementById('objectives-main');
    $main.innerHTML = sign_in_template;
    $main.querySelector('form').addEventListener('submit', sign_in);
  }

  function show_dashboard() {
    $main.innerHTML = "DASHBOARD";
  }

  function sign_in(event) {
    var email;
    event.preventDefault();
    email = event.target.email.value;
    session.sign_in(email).then(show_dashboard);
  }

});
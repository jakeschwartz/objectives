define('session', ['xhr'], function (xhr) {
  return {sign_in: sign_in};

  function sign_in(email) {
    var req;
    return xhr
      .get('/objectives/' + encodeURIComponent(email))
      .send()
      .then(success, fail);

    function success() {
      console.log('found')
      return JSON.load(req.responseText);
    }

    function fail() {
      console.log('not found')
      throw new Error({status: req.status});
    }

  }

});

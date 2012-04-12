define('xhr', ['q'], function (Q) {
  return {get: http_get};

  function http_get(path) {
    return request('GET', path);
  }

  function request(method, path) {
    var deferred, req;
    deferred = Q.defer();
    req = new XMLHttpRequest();
    req.open(method, path);
    req.setRequestHeader('Accept', 'application/json');
    req.onreadystatechange = function () {
      if (req.readyState != 4) return;
      if (req.status >= 200 && req.status < 300) {
        deferred.resolve(req.responseText);
      } else {
        deferred.reject(new Error({status: req.status, error: req.statusText}));
      }
    }
    return {headers: headers, send: send, then: then};

    function headers(obj) {
      for (k in obj) {
        if (!obj.hasOwnProperty(k)) next;
        req.setRequestHeader(k, obj[k]);
      }
    }

    function send() {
      req.send.apply(req, arguments);
      return deferred.promise;
    }

    function then() {
      req.send();
      return deferred.promise.then.apply(deferred.promise, arguments);
    }

  }

})
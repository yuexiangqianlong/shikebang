import browserRequest from 'browser-request';

const ajax = function(path, method, data = {}) {
  return new Promise((resolve, reject) => {
    path = path.replace(/^\/+/, '');
    console.log("url=" + path);
    method = method.toUpperCase();
    const options = {
      method,
      url: path,
    };
    if (method === 'GET' || method === 'HEAD') {
      options.qs = data;
    } else {
      options.form = data;
    }
    browserRequest(options, (err, res, body) => {
      if (err) {
        reject(err);
      } else {
        let data;
        try {
          data = JSON.parse(body.toString());
        } catch (err) {
          return reject(new Error('parse JSON data error: ' + err));
        }
        if (data.error) {
          reject(data.error);
        } else {
          resolve(data);
        }
      }
    });
  });
};
export default ajax;
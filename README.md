# joibird  [![Build Status](https://travis-ci.org/jxm262/joibird.svg?branch=master)](https://travis-ci.org/jxm262/joibird)  
Joi + Bluebird = A Promise based library for Joi
  
Joibird converts the `validate` function of Joi to make it Asynchronous  
  
## Download
  
    npm install joibird
  
#### Example  
```js  
var joibird = require('../lib/joibird');

var schema = joibird.object().keys({
    username: joibird.string().alphanum().min(3).max(30).required(),
    password: joibird.string().regex(/[a-zA-Z0-9]{3,30}/),
    access_token: [joibird.string(), joibird.number()],
    birthyear: joibird.number().integer().min(1900).max(2013),
    email: joibird.string().email()
}).with('username', 'birthyear').without('password', 'access_token');  
  
joibird
  .validate({ username: 'abc', birthyear: 1994 }, schema)  
  .then(function(done) {  
     console.log(done);  
  })  
  .catch(function(err) {  
     console.log(err);
  });
```

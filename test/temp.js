var joibird = require('../lib/joibird');

var schema = joibird.object().keys({
    username: joibird.string().alphanum().min(3).max(30).required(),
    password: joibird.string().regex(/[a-zA-Z0-9]{3,30}/),
    access_token: [joibird.string(), joibird.number()],
    birthyear: joibird.number().integer().min(1900).max(2013),
    email: joibird.string().email()
}).with('username', 'birthyear').without('password', 'access_token');

//console.log(joibird.hasOwnProperty('validate'));

console.log(joibird.validate.__isPromisified__)
//    .then(function(done){
//    console.log(done);
//});
//    .then(function(done){
//    console.log(done);
//}).catch(function(err){
//    console.log(err);
//});

//joibird.validate({ username: 'justin', birthyear: 1994 }, schema).then(function(value){
//    console.log(value);
//}).
//catch(function(err){
//    console.log('found...' + err);
//});



const superagent = require('superagent');

const url = 'ec2-18-184-255-175.eu-central-1.compute.amazonaws.com:3000/users/authenticate';

superagent
    .post(url)
    .send('email=aaaaaa')
    .send('password=bbbbbbbb')
    .then(res => console.log(res.body))
    .catch(err => console.log(err));
function backgroundProcess() {
    const process = require('child_process');   // The power of Node.JS

    // var ls = process.spawn('ls', ['-l']);
    var ls = process.spawn('./test.sh');

};

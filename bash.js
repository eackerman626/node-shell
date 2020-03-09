
process.stdout.write('type here: > ');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'pwd') {
        const pwdFunc = require('./pwd');
        pwdFunc();
    }
    else if (cmd === 'ls') {
        const lsFiles = require('./ls');
        lsFiles();
    };
})

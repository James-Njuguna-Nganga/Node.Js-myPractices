const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'starter.txt'),'utf8', (err,data) => {
    if (err) throw err; 
    console.log(data);
})

 console.log("Hello....");

process.on("uncaughtException", (err) => {
    console.log(`There was an uncaught error: ${err.message}`);
    process.exit(1);
})

fs.writeFile(path.join(__dirname, 'reply.txt'), 'We learn more in the next blog post', (err) => {
    if (err) throw err; 
    console.log('Write complete');

    fs.appendFile(path.join(__dirname, 'reply.txt'), '\n\nHappy  blogs', (err) => {
        if (err) throw err; 
        console.log('Append complete');
    })
    fs.renameFile(path.join(__dirname, 'reply.txt'), path.join(__dirname, 'newReply.txt'), (err) => {
        if (err) throw err; 
        console.log('File Renamed');
    })
})
let proName=process.argv[2]
let pro=['one'];

let fs=require('fs');

if(proName==undefined){
    pro.forEach(element => {
        fs.writeFileSync('./config/proName.js',`exports.name= '${element}' `)
        let exec = require('child_process').execSync;
        exec(`npm run build ${element}`, {stdio: 'inherit'});
    });
}else{
    fs.writeFileSync('./config/proName.js',`exports.name= '${proName}' `)
    let exec = require('child_process').execSync;
    exec('npm run b', {stdio: 'inherit'});
}
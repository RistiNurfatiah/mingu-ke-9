const a = 'a';
const promiseku = new Promise((res, rej) => {
    if(a === 'a'){
        res("berhasil");
    }else{
        rej("gagal");
    }
});

promiseku.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});
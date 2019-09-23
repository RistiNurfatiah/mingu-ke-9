const hewan = ['singa', 'ular', 'harimau'], tambahan =
['buaya', 'beruang', { obj: 'rusa'}]
const arrPushHewan = async () => {
    await tambahan.pop();
    await tambahan.map(res => hewan.push(res))
    console.log(hewan);
}

arrPushHewan();
/*
array pop adalah fungsi array untuk penghapus index/elemen terakhir dari sebuah array
*/

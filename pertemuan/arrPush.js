const hewan = ['singa', 'ular', 'harimau'], tambahan =
['buaya', 'beruang', { obj: 'rusa'}]
const arrPushHewan = async () => {
    await tambahan.map(res => hewan.push(res))
    console.log(hewan);
}

arrPushHewan();
/* NOTE:
array map adalah fungsi perulangan array seperti for in dan foreach
*/
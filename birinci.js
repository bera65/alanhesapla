function hesapla(yaricap){
    let pi = 3.14;
    let alan = yaricap*pi;
    console.log(alan)
}
const degerler = process.argv.slice(2);
hesapla(degerler[0]*1);
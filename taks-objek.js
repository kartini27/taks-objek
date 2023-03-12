//==== soal no 1
console.log('========= property 1');
const mobilMercyBiodata = { // objek 
    tahunPoduksi : 1926
    'jumlah karyawan' : 167.921

    'pendiri' : 'karlbenz','gottlied daimler',
    kantor pusat : 'jerman',
    produk : {
        '1' : 'mobil',
        '2' : 'truk',
        '3' : 'mesin',
        '4' : 'mobil elektrik',
    },
    merek : ['mercedes-AMG', 'mecedes-maybach', 'mercedes-EQ'],

};

console.log('====== property 2');
const angnesMo = {
    tahunLahir : 1986
    'awalKarir' : 1999

    namaLengkap : 'angnes monica muljoto',
    agama :'kristen protestan',
    penghargaan : {
        '2010' : 'AMI award album terbaik',
        '2009' : 'AMI award untuk lagu pop',
        '2019' : 'iheardRadio music social start award',
        '2012' : " indonesia KCA slime start",
        '2012' : 'the shorty vox populi award',
    },
    prestasi : ['nominasi billboard women in music','billboard amerika', 'masuk majalah vogue'];
};

console.log ('======== property 3')
const biodataIphone = {
    tinggi : '160,7mm',
    lebar : '77,6mm',
    'berat' : '240gr',

    pembuat : 'pegatron',
    jenis : 'telepon cerdas',
    model : { 
        'iphone 14 pro max' : '128gb', '256gb','512gb','1tb',
        'iphone 14 pro' : '128gb','256gb', '512gb',
        'iphone 14 plus ' : '128gb','256gb','512gb',
        'iphone 14' : '128gb',
        'iphone SE' : '64gb','128gb',
    },
layanan :['itunestore','app store'];

};
('=========== property 1')
console.log(mobilMercyBiodata[key]);
console.log(mobilMercyBiodata.produk);
('==========property 2')
console.log(angnesMo[key]);
console.log(angnesMo.awalKarir);
('=========property 3')
console.log(biodataIphone[key]);
console.log(biodataIphone.layanan);


 


//==== soal no 2
const aritmatika = {
    penjumlahan function hasilHitung (x,y){
    const hasil = (x + y)
    return hasil 
    },
    pengurangan function hasilHitung (x,y){
        const hasil = (x - y)
        return hasil 
        },
    perkalian function hasilHitung (x,y){
            const hasil = (x * y)
            return hasil 
            },
     pembagian function hasilHitung (x,y){
                const hasil = (x / y)
                return hasil 
                },
                perpangkatan  function hasilHitung (x,y){
                    const hasil = (x ** y)
                    return hasil 
                    },
                    modulus function hasilHitung (x,y){
                        const hasil = (x % y)
                        return hasil 
                        }
};
let x = 20, y = 5
console.log (aritmatika);
//looping biasa
var angka = [160,161,162,163,164,165,166,167,168,169];
for(var i=0; i<angka.length;i++){
  console.log(angka[i]);
  if(i==4)
  break
}

// for off
var tinggi = [170,171,172,173,174,175,176,177,178,179]
for (let x of tinggi){
  console.log(x);
  if(i==3)
  break
}

// hasil analisa=
// ketika saya menginput if dan break di for biasa. maka akan berhenti sesuai index yg di input. sedangkan ketika saya menginput index yg sama di for of, maka hanya index ke 0 yang muncul. namun jika index yg berbeda yg saya masukkan ke for of, maka hasilnya akan menampilkan semua data array di for of, entah itu index yg lebih kecil atau lebih besar dari perulangan for.

try {
    console.log("Awal block try");
    errorCode; //kode yang menghasilkan error
    console.log("Akhir block try"); //sehingga kode disamping tidak dijalankan.
} catch (error) {
    console.log("Terjadi Error!");//menjalankan kode disamping setelah baris kode pertama.
    //terdapat beberapa properti utama object error
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {
    console.log("Akan tetap dieksekusi!");
}
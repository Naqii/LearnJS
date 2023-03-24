//const json = '{ "name": "Yoda", "age": 20 }';
// 2. apa bila tidak sesuai dengan format maka JSON.parse akan menimbulkan error
//const json = '{ bad json }';
const json = '{ "name": "Yoda", "age": 20 }';

try {
    /* 1. fungsi JSON.parse untuk melakukan parsing atau konversi
    dari variabel json(String) menjadi sebuah object. skenario
    diatas akan sering dijumpai ketika melakukan request ke API
    */
    const user = JSON.parse(json);

    // 3. untuk mengatasi sintaksis yang diberikan tidak ada valuenya menggunakan throw agar kita menimbulkan error sendiri
    if (!user.name) {
        throw new SyntaxError("'name' is required")
    }

    /* 4. contoh error ketika ada variabel yang tidak terdefinisi
    5. cara mengatasinya dengan menggunakan if statement
    */
    errorCode;

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    /* 6. cara mengatasi nomor 5
    dengan menggunakan instanceOf, kita bisa mendapatkan tipe dari error yang terjadi
    dari situ kita bisa membuat percabangan bagaimana cara menangani errornya
    */
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
    
}
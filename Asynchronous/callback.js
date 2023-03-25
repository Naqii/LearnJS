//4. ketika offline
function getUsers(isOffline, callback) {
    //1. simulate nerwork delay
    setTimeout(() => {
        const users = ['Jhon', 'Jack', 'Abigail'];
        //3. proses asyncrhonous berpotensi menghasilkan error, misalnya jika sebuah fungsi mengambil data dari internet.
        //maka dari itu fungsi callback selain membawa argumen data juga membawa argumen error jika asynchronous gagal.
        if (isOffline) {
            callback(new Error('cannot retrieve users due offline'), null);
            return;
        }
        
        callback(null, users);
    }, 3000);
}
//2. fungsi ini akan dipanggil ketika proses asynchronous selesai
function usersCallback(error, users) {
    if (error) {
        console.log('process failed:', error.message);
        return;
    }
    console.log('process success:', users);
}

getUsers(false, usersCallback);
getUsers(true, usersCallback);
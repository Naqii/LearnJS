//1. terkadang jika menggunakan library pihak ke 3 kita tidak bisa me-refactor kode dibawah ini
//sehingga kita tidak bisa menggunakan promise dengan menggunakan fungsi promisify dari module util
//kita bisa secara mudah membuat fungsi baru yang dapat mengimplementasikan promise berdasarkan fungsi callback-based

const { promisify } = require('util');
 
function getUsers(isOffline, callback) {
  setTimeout(() => {
    const users = ['John', 'Jack', 'Abigail'];
    if (isOffline) {
      callback(new Error('cannot retrieve users due to offline'), null);
      return;
    }
 
    callback(null, users);
  }, 3000);
}

const getUsersPromise = promisify(getUsers);

getUsersPromise(false)
  .then(users => console.log(users))
  .catch(err => console.log(err.message));
 
getUsersPromise(true)
  .then(users => console.log(users))
  .catch(err => console.log(err.message));
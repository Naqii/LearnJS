function getUsers(isOffline) {
    //1. return a promise object
    return new Promise((resolve, reject) => { //4. dalam proses asyn yg menyebabkan error bisa menggunakan rejecet sedangkan yg sukses resolve
        //2. simulate network delay
        setTimeout(() => {
            const users = ['Jhon', 'Jack', 'Abigail'];
            if (isOffline) {
                reject(new Error('cannot retrieve users due offline'), null);
                return;
            }
            
            resolve(users);
        }, 3000);
    })
}

getUsers(false)
    .then(users => console.log(users))
    .catch(err => console.log(err.message));
/*
Pada promice.race() sama seperti promice.all(), namun hanya mengembalikan nilai promise yang
paling cepat menyelesaikan eksekusinya.
ini juga berlaku untuk nilai promise rejected.
*/
const promise1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.race([promise1, promise2, promise3])
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message)); // Ups
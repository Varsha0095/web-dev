console.log('person1: shows tickets')
console.log('person2: shows tickets')

const promiseWifeBringingTicks = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('tickets');
    },1000);
});
const getPopcorn = promiseWifeBringingTicks.then((t) => {
    console.log('wife: I have the tickets');
    console.log('husband: Let us go in');
    console.log('wife: No I am hungry');
    return new Promise ((resolve, reject) => {
        resolve (`${t} popcorn`);
    });
});
const getButter = getPopcorn.then((t) => {
    console.log('husband: I got popcorn')
    console.log('husband: we should go in')
    console.log('wife: I need butter on my popcorn')
    return new Promise((resolve, reject) => {
        resolve(`${t} butter`)
    });
});
const getcoldDrinks = getButter.then((t) => { 
    console.log('husband: I got the butter')
    console.log('husband: Do you need something else')
    console.log('wife: I want cold drinks for us')
       return new Promise((resolve, reject) => resolve(`${t} coldDrinks`));
});
getcoldDrinks.then((t) => console.log(t))

console.log('person4: shows tickets')
console.log('person5: shows tickets')

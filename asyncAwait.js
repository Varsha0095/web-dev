console.log('person1: shows tickets');
console.log('person2: shows tickets');
const preMovieScenes = async() => {
    const promiseWifeBringingTicks = new Promise ((resolve, reject) => {
        setTimeout(() => resolve('tickets'),2000);
    });
    const getPopcorn = new Promise ((resolve, reject) => resolve(`popcorn`));
    const addButter = new Promise((resolve, reject) => resolve(`butter`));
    const getColdDrinks = new Promise((resolve, reject) => resolve(`coldDrinks`));

    let tickets = await promiseWifeBringingTicks;
    console.log(`wife: I have the ${tickets}`);
    console.log('husband: Let us go in');
    console.log('wife: No I am hungry');

    let [popcorn, butter, coldDrinks] = await Promise.all([getPopcorn, addButter, getColdDrinks]);

    console.log(`${popcorn}, ${butter}, ${coldDrinks}`)

    // let popcorn = await getPopcorn;
    // console.log(`husband: I got ${popcorn}`);
    // console.log('husband: we should go in');
    // console.log('wife: I need butter on my popcorn');

    // let butter = await addButter;
    // console.log(`husband: I have got the ${butter}`);
    // console.log('husband: Do you want anything else');
    // console.log('wife: Yes I want coldDrinks for us');
    // console.log('husband: Okay I will get it');

    // let coldDrinks = await getColdDrinks;
    // console.log(`husband: I have got the ${coldDrinks}`);
    // console.log('husband: Should we go in now');
    // console.log('wife: Yes we are running late');
    // console.log('husband: Thanks for the reminder');



    return tickets;
}
preMovieScenes().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows tickets');
console.log('person5: shows tickets');








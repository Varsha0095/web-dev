const posts = [
    { title: 'Post One', body: 'This is post One', createdAt: new Date().getTime(), lastActivityTime:'11th of Oct'},
    { title: 'Post Two', body: 'This is post Two', createdAt: new Date().getTime(), lastActivityTime:'11th of Oct' },


];
let intervalID = 0;
function getPosts() {
    clearInterval(intervalID);

    intervalID = setInterval(() => {
        // console.log(posts);
        let output = '';
        posts.forEach((post, index) => {
            output = output + `<li> ${post.title} - last updated ${(new Date().getTime() - post.createdAt) / 1000} seconds ago Last Edited ${(new Date().getTime()- post.editedAt)/1000} seconds ago</li>`;
        });
        document.body.innerHTML = output;
    },1000);

}
function createPost(post) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            // posts.push({ ...post, createdAt: new Date().getTime(), editedAt: new Date().getTime() });
            posts.push(post);
            const error = false;
            if(!error) {
                resolve();
            }
            else{
                reject('Error: Something went wrong');
            }

        },1000);
    })
    
}
function deletePost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            if(posts.length>0){
                resolve(posts.pop());
            }
            else{
                reject('Array is now empty');
            }
        },1000);
    })
}

// createPost({title:'Post Three', body: 'This is post Three'})
// createPost({title:'Post Four', block:' This is post Four'})
// .then(() => {
//     getPosts();
//     deletePost().then(() => {
//         getPosts();
//         deletePost().then(() => {
//             getPosts();
//             deletePost().then(() => {
//                 getPosts();
//                 deletePost().then(() => {})
//                 .catch(err => console.log('Inside catch block',err))
//             }).catch(err => console.log('error caught',err))
//         }).catch(err => console.log('error caught',err))

//     }).catch(err => console.log('error caught',err))

// }).catch(err => console.log('error caught',err))
// // PROMISE.ALL
// const promise1 = Promise.resolve('Hey Varsha');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//     setTimeout(resolve, 2000, 'GoodBye')
// );
// Promise.all([promise1,promise2,promise3]).then(values => 
// console.log(values));

   
    const userObj = [{ username: 'varsha', lastActivityTime: '11th of Oct'}];

function updateLastActivityTime(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
           posts.lastActivityTime = new Date().getTime();
            resolve(posts.lastActivityTime)
            reject('Error')
        },1000)
    })
}
function userUpdatesPost(createPost){
    Promise.all([createPost,updateLastActivityTime])
    .then((response) => {
        console.log(response);
    })
    .catch(err => console.log(err))
}
createPost({title:'Post 3', block:'This is post 3', lastActivityTime: '11th of Oct'});
createPost({title:'Post 4', block:'This is post 4',lastActivityTime: '11th of Oct'})
// console.log()
Promise.all([createPost,updateLastActivityTime()])
.then((response) => {
    console.log(response[1])
}) 
console.log(posts);
const posts = [
    {title: 'Post One', body: 'This is post One', createdAt: new Date().getTime()},
    {title: 'Post Two', body: 'This is post Two', createdAt: new Date().getTime()},

];
let intervalID = 0;
function getPosts(){
    clearInterval(intervalID);

    intervalID =  setInterval(() => {
            let output = '';
            posts.forEach((post, index) => {
            output = output + `<li> ${post.title} - last updated ${(new Date().getTime()-post.createdAt) / 1000} seconds ago</li>`;
        });
        document.body.innerHTML = output;
        },1000);
        
}
// function lastEditedInSecondsAgo(post){
//     clearInterval(intervalID);
//     intervalID = setInterval(() => {
//         console.log(`<li> last edited ${Math.floor(new Date().getTime()-post.createdAt) / 1000} seconds ago</li>`);
//         })
// }

function createPost(post, callback){
    setTimeout(() => {
        posts.push({...post, createdAt: new Date().getTime()});
        callback();
    }, 2000);
}
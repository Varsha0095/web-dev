const posts = [
    { title: 'Post One', body: 'This is post One', createdAt: new Date().getTime() },
    { title: 'Post Two', body: 'This is post Two', createdAt: new Date().getTime() },

];
let intervalID = 0;
function getPosts() {
    clearInterval(intervalID);

    intervalID = setInterval(() => {
        console.log(posts);
        let output = '';
        posts.forEach((post, index) => {
            output = output + `<li> ${post.title} - last updated ${(new Date().getTime() - post.createdAt) / 1000} seconds ago Last Edited ${(new Date().getTime()- post.editedAt)/1000} seconds ago</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);

}
function lastEditedInSecondsAgo(post, callback) {
    clearInterval(intervalID);
    setInterval(() => {
        posts.push({ ...post, editedAt: new Date().getTime() });
        callback();
    },1000)
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push({ ...post, createdAt: new Date().getTime(), editedAt: new Date().getTime() });
        callback();
    }, 2000);
}
function create4thPost(post, createPost) {
    setTimeout(() => {
        posts.push({ ...post, createdAt: new Date().getTime(),editedAt: new Date().getTime()  });
        createPost();
    }, 2000);
}

createPost({ title: 'Post Three', body: 'This is post Three'}, getPosts);
create4thPost({ title: 'Post Four', body: 'This is post Four' }, getPosts);


// lastEditedInSecondsAgo({ title: 'Post Three', body: 'This is post Three'}, getPosts);
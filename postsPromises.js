const posts = [
    { title: 'Post One', body: 'This is post One', createdAt: new Date().getTime(), lastActivityTime:'11th of Oct'},
    { title: 'Post Two', body: 'This is post Two', createdAt: new Date().getTime(), lastActivityTime:'11th of Oct' },
];

function getPosts() {
   
        // console.log(posts);
        let output = '';
        posts.forEach((post, index) => {
            output = output + `<li> ${post.title} - last updated ${(new Date().getTime() - post.createdAt) / 1000} seconds ago Last Edited ${(new Date().getTime()- post.createdAt)/1000} seconds ago</li>`;
        });
        document.body.innerHTML = output;
    

}
function createPost(post){
    return new Promise((resolve, reject) => {
        resolve(posts.push(post));
    })
}
function deletePost(){
    return new Promise((resolve, reject) => {
        if(posts.length > 0){
            resolve(posts.pop());
        }
        else{
            reject('Array is already empty');
        }

    })
}

createPost({title:'Post3', block:'This is post three'}, getPosts)
createPost({title:'Post4', block:'This is post four'}, getPosts)
.then(() => {
    getPosts();
    deletePost().then(() => {
        getPosts();
        deletePost().then(() => {
            getPosts();
            deletePost().then(() => {})
                getPosts();
                deletePost().then(() => {
                    getPosts();
                    deletePost().then(() => {})
                    .catch(err => (console.log('Error caught', err)));
                })
                .catch(err => (console.log('Error caught', err)));

            })
            .catch(err => (console.log('Error caught', err)));
            
        })
    })
// });
console.log(posts);
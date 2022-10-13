const posts = [
    { title: 'Post One', body: 'This is post One', createdAt: new Date().getTime(), lastActivityTime:'11th of Oct'},
    { title: 'Post Two', body: 'This is post Two', createdAt: new Date().getTime(), lastActivityTime:'11th of Oct' },
];

// function getPosts() {
//    // console.log(posts);
//     let output = '';
//     posts.forEach((post, index) => {
//         output = output + `<li> ${post.title} - last updated ${(new Date().getTime() - post.createdAt) / 1000} seconds ago Last Edited ${(new Date().getTime()- post.createdAt)/1000} seconds ago</li>`;
//     });
//     document.body.innerHTML = output;
// }
const getPosts = async() => {
    
        let output = '';
        posts.forEach((post, index) => {
            output = output + `<li> ${post.title} - last updated ${(new Date().getTime() - post.createdAt) / 1000} seconds ago Last Edited ${(new Date().getTime()- post.createdAt)/1000} seconds ago</li>`;
        });
        const showPosts = new Promise ((resolve, reject) => {
        resolve('output');
        document.body.innerHTML = output;
        console.log(showPosts);
        
    });
    output = await showPosts;
    console.log('getPosts');

    return output;
}   

const main = async() => {
    let [post1, post2] = await Promise.all([createPost, deletePost])
    getPosts();
}
    const createPost = new Promise ((resolve, reject) => resolve(posts.push({ title: 'Post 3', body: 'This is post 3', createdAt: new Date().getTime(), lastActivityTime:'11th of Oct'},)));

    const deletePost = new Promise ((resolve, reject) => {
        if(posts.length > 0){
            resolve(posts.pop());
        }
        else{
            reject('Array is already empty');
        }
    });
     
 
    
    console.log(`${createPost}, ${deletePost}`);

    // return output;

    

getPosts();
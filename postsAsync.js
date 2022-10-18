const posts = [
    { title: 'Post One', body: 'This is post One', createdAt: new Date().getTime(), lastActivityTime:'11th of Oct'},
    { title: 'Post Two', body: 'This is post Two', createdAt: new Date().getTime(), lastActivityTime:'11th of Oct' },
];
const getPosts = async() => {
    const showPosts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let output = '';
                posts.forEach((post, index) => {
                    output = output + `<li>${post.title}</li>`;
                });
                document.body.innerHTML = output;
                resolve();
            },1000);
        })
    }

    const createPost = (post) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                posts.push(post);
                const error = false;
                if(!error){
                    resolve();
                }
                else{
                    reject('error: something went wrong');
                }
            },2000)
        });
    }

    const deletePost = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                if(posts.length>0){
                    const lastelement = posts.pop();
                    resolve(lastelement);
                }
                else{
                    reject('array is already empty');
                }
            },2000);
        })
    }

    try{
        await showPosts();

        await createPost({title: 'post 3', body: 'this is third post'});
        await showPosts();
        await deletePost();
        await showPosts();
        await deletePost();
        await showPosts();
        await deletePost();
        await showPosts();
        await deletePost();
    }
    catch(err){
        console.log('delete error',err)
    }
}
getPosts();

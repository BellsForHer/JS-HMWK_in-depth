const post = {
    status: "I am hiking today!"
}

console.log(post);

post.status = "I was hiking today!";

console.log(post);
// can reassign variables

const posts =[
    {
        status: "I am going to the movies today!"
    }
]

// posts = [] == can't redefine

posts.push({status: "I got my license today!"});
// can add to array

console.log(posts);
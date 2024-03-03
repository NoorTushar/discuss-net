const blogContainer = document.getElementById("blogContainer");
console.log(blogContainer);

// 1. Load Posts in Let's Discuss Section

const loadPosts = async () => {
   const url = "https://openapi.programming-hero.com/api/retro-forum/posts";
   const response = await fetch(url);
   const data = await response.json();
   // all posts array here:
   const { posts } = data;

   // executing display function with the array got
   displayPosts(posts);
};

// 2. Display Posts in Let's Discuss Section

const displayPosts = async (posts) => {
   posts.forEach((eachPost) => {
      console.log(eachPost);
   });
};

loadPosts();

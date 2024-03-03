const blogContainer = document.getElementById("blogContainer");
const latestPostsContainer = document.getElementById("latestPostContainer");

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
      const div = document.createElement("div");
      const { isActive } = eachPost;

      let circleClasses = "";

      if (isActive) {
         circleClasses =
            "fa-solid fa-circle text-lg text-green-600 absolute -right-2 -top-2 bg-white rounded-full size-6 flex justify-center items-center";
      } else {
         circleClasses =
            "fa-solid fa-circle text-lg text-red-600 absolute -right-2 -top-2 bg-white rounded-full size-6 flex justify-center items-center";
      }
      // isActive?

      div.className =
         "bg-[#F3F3F5] rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row gap-6";

      div.innerHTML = `
      <!-- inner left blogger image -->
      <div
         class="size-[52px] md:size-[72px] relative basis-[35%]"
      >
         <img
            class="w-full rounded-2xl"
            src="https://i.ibb.co/wYxp7d6/pexels-spencer-selover-428328.jpg"
            alt=""
         />
         <i
            class="${circleClasses}"
         ></i>
      </div>

      <!-- inner right blog details -->
      <div class="space-y-4">
         <div
            class="*:opacity-80 flex space-x-4 font-inter text-our-black font-medium text-sm"
         >
            <p># <span>${eachPost.category}</span></p>
            <p>Author: <span>${eachPost.author.name}</span></p>
         </div>

         <h3 class="text-xl font-bold">
            ${eachPost.title}
         </h3>

         <p class="opacity-60 font-inter">
            ${eachPost.description}
         </p>

         <!-- border hr -->
         <hr class="border-2 border-dashed" />

         <div
            class="flex justify-between flex-col sm:flex-row gap-4"
         >
            <div
               class="flex gap-4 *:flex *:items-center *:space-x-3"
            >
               <div>
                  <img
                     src="assets/images/tabler-icon-message-2.png"
                     alt=""
                  />
                  <span class="opacity-60 font-inter">${eachPost.comment_count}</span>
               </div>

               <div>
                  <img
                     src="assets/images/tabler-icon-eye.png"
                     alt=""
                  />
                  <span class="opacity-60 font-inter"
                     >${eachPost.view_count}</span
                  >
               </div>

               <div>
                    <img src="assets/images/tabler-icon-clock-hour-9.png" alt="" />
                    <p class="opacity-60 font-inter">
                        <span>${eachPost.posted_time}</span> min
                    </p>
                </div>  
            </div>
            <!-- Read Button -->
            <div>
               <button
                  id="readBtn"
                  class="bg-green-600 text-white size-9 rounded-full flex items-center justify-center"
               >
                  <i class="fa-solid fa-envelope-open"></i>
               </button>
            </div>
         </div>
      </div>
      `;

      blogContainer.appendChild(div);
   });
};

loadPosts();

// Latest Post Section Functionality:

const loadLatestPosts = async () => {
   const url =
      "https://openapi.programming-hero.com/api/retro-forum/latest-posts";
   const response = await fetch(url);
   const data = await response.json();

   displayLatestPosts(data);
};

const displayLatestPosts = (posts) => {
   posts.forEach((eachPost) => {
      const div = document.createElement("div");
      div.className = "card border border-gray-300 p-6";

      div.innerHTML = `
        <!-- Cover Image -->
        <figure class="">
            <img
                src=${eachPost.cover_image}
                alt=""
                class="rounded-xl"
            />
        </figure>
        <div class="card-body space-y-2 p-0 pt-6">

            
            <div class="flex gap-2">
                <img src="assets/images/date-icon.png" alt="" />
                <!-- Date -->
                <p class="opacity-60">${
                   eachPost.author.posted_date || "No Publish Date"
                }</p>
            </div>
            <!-- Post title -->
            <h3 class="text-lg font-extrabold">
                ${eachPost.title}
            </h3>
            <!-- post description -->
            <p class="opacity-60">
                ${eachPost.description}
            </p>
            <!-- author container -->
            <div class="flex gap-3">
                <!-- Author Image -->
                <div>
                    <img src=${eachPost.profile_image} alt="" />
                </div>
                <div>
                    <!-- author name -->
                    <h4 class="font-bold">${eachPost.author.name}</h4>
                    <!-- author designation -->
                    <p class="text-sm opacity-60">${
                       eachPost.author.designation || "Unknown"
                    }</p>
                </div>
            </div>
        </div>
      `;

      latestPostsContainer.append(div);
   });
};

loadLatestPosts();

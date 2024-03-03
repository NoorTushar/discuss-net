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
            class="fa-solid fa-circle text-lg text-green-600 absolute -right-2 -top-2 bg-white rounded-full size-6 flex justify-center items-center"
         ></i>
      </div>
      <!-- inner right blog details -->
      <div class="space-y-4">
         <div
            class="*:opacity-80 flex space-x-4 font-inter text-our-black font-medium text-sm"
         >
            <p># <span>Music</span></p>
            <p>Author: <span>Awlad Hossain</span></p>
         </div>

         <h3 class="text-xl font-bold">
            10 Kids Unaware of Their Halloween Costume
         </h3>

         <p class="opacity-60 font-inter">
            It’s one thing to subject yourself to ha Halloween
            costume mishap because, hey that’s your prerogative
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
                  <span class="opacity-60 font-inter">560</span>
               </div>

               <div>
                  <img
                     src="assets/images/tabler-icon-eye.png"
                     alt=""
                  />
                  <span class="opacity-60 font-inter"
                     >1,568</span
                  >
               </div>

               <div>
                  <img
                     src="assets/images/tabler-icon-clock-hour-9.png"
                     alt=""
                  />
                  <span class="opacity-60 font-inter"
                     >5 min</span
                  >
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
        <figure class="">
            <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                class="rounded-xl"
            />
        </figure>
        <div class="card-body space-y-2 p-0 pt-6">
            <!-- Date -->
            <div class="flex gap-2">
                <img src="assets/images/date-icon.png" alt="" />
                <p class="opacity-60">29 January 2024</p>
            </div>
            <!-- Post title -->
            <h3 class="text-lg font-extrabold">
                What will a mars habitat force that impact in our daily
                life!!!
            </h3>
            <!-- post description -->
            <p class="opacity-60">
                Yes, you can run unit tests and view the results
                directly within the app.
            </p>
            <!-- author container -->
            <div class="flex gap-3">
                <div>
                    <img src="assets/images/author-image.jpg" alt="" />
                </div>
                <div>
                    <!-- author name -->
                    <h4 class="font-bold">Cameron Williamson</h4>
                    <!-- author designation -->
                    <p class="text-sm opacity-60">Unknown</p>
                </div>
            </div>
        </div>
      `;

      latestPostsContainer.append(div);
   });
};

loadLatestPosts();

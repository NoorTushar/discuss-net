```

<!DOCTYPE html>
<html lang="en" data-theme="light">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>B9-A6</title>
      <!-- Font Awesome CDN -->
      <link
         rel="stylesheet"
         href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
         integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
         crossorigin="anonymous"
         referrerpolicy="no-referrer"
      />

      <!-- Tailwind and Daisy UI -->
      <link
         href="https://cdn.jsdelivr.net/npm/daisyui@4.6.0/dist/full.min.css"
         rel="stylesheet"
         type="text/css"
      />
      <script src="https://cdn.tailwindcss.com"></script>

      <!-- Custom CSS -->
      <link rel="stylesheet" href="css/custom.css" />

      <!-- Custom Tailwind -->
      <script>
         tailwind.config = {
            theme: {
               extend: {
                  colors: {
                     clifford: "#000",
                     "our-purple": "#797DFC",
                     "our-black": "#12132D",
                  },
               },
            },
         };
      </script>
   </head>
   <body class="font-mulish text-our-black">
      <header class="max-w-[1170px] md:w-[82%] mx-auto mt-4 md:mt-7">
         <!-- navbar starts -->
         <nav class="navbar">
            <div class="navbar-start">
               <!-- dropdown -->
               <div class="dropdown">
                  <div
                     tabindex="0"
                     role="button"
                     class="btn btn-ghost lg:hidden"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="2"
                           d="M4 6h16M4 12h8m-8 6h16"
                        />
                     </svg>
                  </div>
                  <ul
                     tabindex="0"
                     class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                     <li><a>Home</a></li>
                     <li><a>Edit</a></li>
                     <li><a>Add</a></li>
                     <li><a>Forum</a></li>
                  </ul>
               </div>
               <!-- Logo -->
               <a class="btn btn-ghost text-3xl font-black text-our-black"
                  >ReTro</a
               >
            </div>

            <div class="navbar-end">
               <div class="navbar-center hidden md:flex">
                  <ul class="px-1 menu-horizontal space-x-3">
                     <!-- menu item 1 -->
                     <li>
                        <a
                           class="size-12 border border-gray-200 flex items-center justify-center bg-[#F8F8F9] rounded-full cursor-pointer tooltip tooltip-bottom"
                           data-tip="home"
                           ><i
                              class="text-[#6E6F7F] fa-solid fa-house bg-[#F8F8F9]"
                           ></i
                        ></a>
                     </li>
                     <!-- menu item 2 -->
                     <li>
                        <a
                           class="size-12 border border-gray-200 flex items-center justify-center bg-[#F8F8F9] rounded-full cursor-pointer tooltip tooltip-bottom"
                           data-tip="edit"
                           ><i class="text-[#6E6F7F] fa-solid fa-pencil"></i
                        ></a>
                     </li>
                     <!-- menu item 3 -->
                     <li>
                        <a
                           class="size-12 border border-gray-200 flex items-center justify-center bg-[#F8F8F9] rounded-full cursor-pointer tooltip tooltip-bottom"
                           data-tip="add"
                           ><i class="text-[#6E6F7F] fa-solid fa-user-plus"></i
                        ></a>
                     </li>
                     <!-- menu item 4 -->
                     <li>
                        <a
                           class="size-12 border border-gray-200 flex items-center justify-center bg-[#F8F8F9] rounded-full cursor-pointer tooltip tooltip-bottom"
                           data-tip="forum"
                           ><i class="text-[#6E6F7F] fa-solid fa-flag"></i
                        ></a>
                     </li>
                  </ul>
               </div>
               <!-- Button  -->
               <div class="ml-6">
                  <button
                     class="btn px-10 rounded-3xl bg-our-purple text-white text-[16px] font-bold hover:bg-violet-400"
                  >
                     Sign In
                  </button>
               </div>
            </div>
         </nav>
         <!-- navbar end -->

         <!-- banner start -->
         <div
            class="hero min-h-[550px] bg-our-black rounded-3xl mt-3"
            style="background-image: url(./assets/images/bgbanner.png)"
         >
            <!-- overlay div just -->
            <div class="hero-overlay bg-black bg-opacity-20 rounded-3xl"></div>
            <!-- main div -->
            <div class="flex flex-col lg:flex-row gap-6 py-10 p-6 lg:p-[60px]">
               <!-- left banner -->
               <div class="text-white basis-3/5 space-y-6 md:space-y-8">
                  <h1 class="mb-5 text-4xl md:text-6xl font-black">
                     Welcome to the
                     <span class="text-our-purple">ReTro</span> Forum
                  </h1>
                  <p
                     class="mb-5 md:text-xl font-medium opacity-80 lg:max-w-[455px]"
                  >
                     Share your favorite opinion and win and wp forum coffee
                     mug!
                  </p>
                  <div class="lg:max-w-[400px] relative flex items-center">
                     <input
                        id="searchCategory"
                        class="w-full text-sm md:text-lg py-5 md:py-4 px-5 rounded-full text-our-black focus:outline-none"
                        type="text"
                        placeholder="Search here anything"
                     />
                     <button
                        id="postSearchButton"
                        class="absolute right-1 btn px-6 md:px-10 rounded-3xl bg-our-purple text-white text-[16px] font-bold hover:bg-violet-400 border-none"
                     >
                        Search
                     </button>
                  </div>
               </div>
               <!-- right banner -->
               <div
                  class="p-12 rounded-3xl bg-white text-our-primary basis-2/5 flex items-center justify-center"
               >
                  <div class="w-full">
                     <ul class="*:flex *:justify-between space-y-4">
                        <li><span>Registered Users</span><span>01</span></li>
                        <li><span>Forum</span><span>05</span></li>
                        <li><span>Topics</span><span>01</span></li>
                        <li><span>Replies</span><span>01</span></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <!-- banner end -->
      </header>
      <main>
         <!-- Let's Discuss Section Start -->
         <section
            id="letsDiscuss"
            class="mt-[60px] md:mt-[100px] max-w-[1170px] w-[90%] md:w-[82%] mx-auto"
         >
            <!-- section title start -->
            <div class="text-our-black text-center mb-12">
               <h2 class="font-black text-3xl md:text-[40px] mb-4 md:mb-6">
                  Let's Discuss
               </h2>
               <p
                  class="opacity-60 font-inter text-sm md:text-lg max-w-[690px] mx-auto"
               >
                  Yes, you can run unit tests and view the results directly
                  within the app. The integrated testing features allow for a
                  streamlined .
               </p>
            </div>
            <!-- section title end -->

            <!-- Blogs Main Div Start-->
            <div class="flex flex-col lg:flex-row gap-5 md:gap-6">
               <!-- Left Blog Div Start -->
               <div class="basis-[65%] flex flex-col gap-6">
                  <!-- Loading Spinner -->
                  <div id="allPostLoader" class="text-center mt-8 hidden">
                     <span
                        class="loading loading-dots loading-lg text-our-purple"
                     ></span
                     >.
                  </div>

                  <div id="blogContainer" class="flex flex-col gap-6">
                     <!-- datas here dynamically -->
                  </div>
               </div>
               <!-- Left Blog Div End -->

               <!-- Right Blog Div Start -->
               <div class="p-6 bg-[#F3F3F5] rounded-3xl basis-[40%]">
                  <!-- right upper Title start-->
                  <div class="flex justify-between">
                     <h3 class="text-xl font-bold">Title</h3>
                     <div class="flex gap-1 flex-row">
                        <div>
                           <img src="assets/images/green-tickmark.png" alt="" />
                        </div>
                        <p class="opacity-60 font-inter">
                           Mark as read (<span id="markAsReadCounter">0</span>)
                        </p>
                     </div>
                  </div>
                  <!-- right upper Title end-->

                  <!-- right lower lists start -->
                  <div id="shortListContainer" class="shortListContainer">
                     <!-- dynamically will be added here -->
                  </div>
                  <!-- right lower lists end -->
               </div>
               <!-- Right Blog Div End -->
            </div>
            <!-- Blogs Main Div End-->
         </section>
         <!-- Let's Discuss Section End -->

         <!-- Join Forum Section Start -->
         <section
            id="joinForumSection"
            class="mt-[60px] md:mt-[100px] max-w-[1170px] w-[90%] md:w-[82%] mx-auto"
         >
            <div
               class="hero bg-our-black rounded-[32px] px-6 py-12 lg:p-0 lg:py-20"
            >
               <div
                  class="hero-content flex-col lg:flex-row-reverse space-y-8 lg:space-y-0"
               >
                  <!-- forum image -->
                  <div class="basis-2/5">
                     <img src="assets/images/joinforum.png" class="" />
                  </div>

                  <!-- forum details -->
                  <div class="text-white lg:pl-16 basis-3/5 space-y-2">
                     <h1 class="text-3xl md:text-[40px] font-black">
                        Join Our Forum
                     </h1>
                     <p class="py-6 opacity-80 text-lg font-medium">
                        Share your favorite opinion and win and wp forum coffee
                        mug! Yes, you can run unit tests and view the results
                        directly within the app.
                     </p>
                     <div class="text-center lg:text-start">
                        <button
                           class="btn px-6 md:px-10 rounded-3xl bg-our-purple text-white text-lg lg:text-[20px] font-bold hover:bg-violet-400 border-none"
                        >
                           Registered Now
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <!-- Join Forum Section End -->

         <section
            id="letsDiscuss"
            class="mt-[60px] md:mt-[100px] max-w-[1170px] w-[90%] md:w-[82%] mx-auto"
         >
            <!-- section title start -->
            <div class="text-our-black text-center mb-12">
               <h2 class="font-black text-3xl md:text-[40px] mb-4 md:mb-6">
                  Latest Posts
               </h2>
               <p
                  class="opacity-60 font-inter text-sm md:text-lg max-w-[690px] mx-auto"
               >
                  Yes, you can run unit tests and view the results directly
                  within the app. The integrated testing features allow for a
                  streamlined .
               </p>
            </div>
            <!-- section title end -->
            <div id="latestPostLoader" class="text-center">
               <span
                  class="loading loading-dots loading-lg text-our-purple"
               ></span>
            </div>
            <!-- Latest Post Gallery Container Start -->
            <div
               id="latestPostContainer"
               class="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
               <!-- each posts will be created here dynamically -->
            </div>
            <!-- Latest Post Gallery Container End -->
         </section>
      </main>

      <footer class="bg-[#F5F5F6] mt-[60px] md:mt-[100px]">
         <div
            class="footer footer-center py-10 sm:py-16 md:py-24 px-10 text-base-content rounded max-w-[1170px] md:w-[82%] mx-auto"
         >
            <!-- logo -->
            <div>
               <a href=""><img src="assets/images/logo.png" alt="" /></a>
            </div>
            <!-- descriptions -->
            <p class="opacity-70 max-w-[600px]">
               Contrary to popular belief, Lorem Ipsum is not simply random
               text. It has roots in a piece of classical Latin literature from
               45 BC
            </p>
            <nav>
               <div
                  class="grid grid-flow-col gap-4 items-center *:cursor-pointer *:text-2xl"
               >
                  <a
                     ><i class="fa-brands fa-twitter hover:text-our-purple"></i
                  ></a>
                  <a
                     ><i
                        class="fa-brands fa-facebook-f hover:text-our-purple"
                     ></i
                  ></a>
                  <a
                     ><i
                        class="fa-brands fa-instagram hover:text-our-purple"
                     ></i
                  ></a>
                  <a
                     ><i class="fa-brands fa-github hover:text-our-purple"></i
                  ></a>
               </div>
            </nav>
            <hr class="border border-gray-300 w-full" />
            <aside>
               <p>Copyright © 2024 - All right reserved by Retro.</p>
               <p>
                  Website created by
                  <a
                     target="_blank"
                     href="https://www.facebook.com/NoorTusharKhan/"
                     ><strong class="text-our-purple"
                        >Noor Tushar Khan</strong
                     ></a
                  >
               </p>
            </aside>
         </div>
      </footer>
      <!-- JS Files -->
      <script src="scripts/posts.js"></script>
   </body>
</html>

<!-- max-w-[1170px] w-[90%] md:w-[82%] mx-auto -->


```

```
const blogContainer = document.getElementById("blogContainer");
const latestPostsContainer = document.getElementById("latestPostContainer");
const shortListContainer = document.getElementById("shortListContainer");

const markAsReadCounter = document.getElementById("markAsReadCounter");

const searchCategoryElement = document.getElementById("searchCategory");
const postSearchButton = document.getElementById("postSearchButton");
const allPostLoader = document.getElementById("allPostLoader");

let categorySearchName = "";

const latestPostLoader = document.getElementById("latestPostLoader");

let allLoadPostsTimeoutId;
let latestPostsTimeoutId;

// 1. Load Posts in Let's Discuss Section

const loadPosts = async (cat_name) => {
   blogContainer.innerHTML = "";
   if (allLoadPostsTimeoutId) {
      clearTimeout(allLoadPostsTimeoutId);
   }

   allPostLoader.classList.remove("hidden");
   console.log(allPostLoader);
   const url = `https://openapi.programming-hero.com/api/retro-forum/posts?category=${cat_name}`;
   const response = await fetch(url);
   const data = await response.json();
   // all posts array here:
   const { posts } = data;

   // after 2 seconds disabling the loader and showing post

   allLoadPostsTimeoutId = setTimeout(() => {
      allPostLoader.classList.add("hidden");
      // executing display function with the array got
      displayPosts(posts);
      console.log(`time out of All posts Executed`);
   }, 2000);
};

// 2. Display Posts in Let's Discuss Section

const displayPosts = async (posts) => {
   blogContainer.innerHTML = "";
   posts.forEach((eachPost) => {
      const div = document.createElement("div");

      // isActive circle color conditional
      const { isActive } = eachPost;

      isActive
         ? (circleColor = "text-green-600")
         : (circleColor = "text-red-600");
      // done the above isActive conditional

      div.className =
         "bg-[#F3F3F5] rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row gap-6";

      div.innerHTML = `
      <!-- inner left blogger image -->
      <div
         class="size-[52px] md:size-[72px] relative basis-[35%]"
      >
         <img
            class="w-full rounded-2xl"
            src="${eachPost.image}"
            alt=""
         />
         <i
            class="fa-solid fa-circle text-lg absolute -right-2 -top-2 bg-white rounded-full size-6 flex justify-center items-center ${circleColor}"
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
               onclick="makeShortlisted('${eachPost.title}', ${eachPost.view_count})"
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

// 3. Clicking Green markRead Button
const makeShortlisted = (postName, viewCount) => {
   const div = document.createElement("div");
   div.className =
      "mark-read-item gap-y-2 flex flex-col sm:items-center sm:flex-row justify-between bg-white p-4 rounded-xl my-5";

   div.innerHTML = `

        <h3 class="text-sm font-bold basis-[75%]">
            ${postName}
        </h3>

        <div class="flex gap-1 m-0 items-center">
            <img
                src="assets/images/tabler-icon-eye.png"
                alt=""
            />

            <span class="text-sm opacity-60 font-inter"
                >${viewCount}</span
            >
        </div>
   `;

   shortListContainer.appendChild(div);

   const totalItemsMarked = document.querySelectorAll(".mark-read-item").length;

   markAsReadCounter.innerText = totalItemsMarked;
};

// 4. Search Button Click Functionality

const handleSearch = () => {
   console.log(`clicked search button`);
   categorySearchName = searchCategoryElement.value;
   console.log(categorySearchName);
   console.log(allPostLoader);
   allPostLoader.classList.add("block");
   loadPosts(categorySearchName);
};

postSearchButton.addEventListener("click", () => {
   handleSearch();
});

// Latest Post Section Functionality:

const loadLatestPosts = async () => {
   if (latestPostsTimeoutId) {
      clearTimeout(latestPostsTimeoutId);
   }

   latestPostLoader.classList.remove("hidden");
   const url =
      "https://openapi.programming-hero.com/api/retro-forum/latest-posts";
   const response = await fetch(url);
   const data = await response.json();

   latestPostsTimeoutId = setTimeout(() => {
      latestPostLoader.classList.add("hidden");
      displayLatestPosts(data);
      console.log(`time out of latest posts Executed`);
   }, 2000);
};

const displayLatestPosts = (posts) => {
   latestPostLoader.classList.add("hidden");

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

loadPosts(categorySearchName);
loadLatestPosts();

```
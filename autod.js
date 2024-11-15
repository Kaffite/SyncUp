document.addEventListener("DOMContentLoaded", function() {
  const newPostButton = document.getElementById("newPostButton");
  const postFormContainer = document.getElementById("postFormContainer");
  const postForm = document.getElementById("postForm");
  const postsList = document.getElementById("postsList");
  const cancelPostButton = document.getElementById("cancelPostButton");

  let posts = [];

  // Load posts from localStorage if available
  if (localStorage.getItem("posts")) {
      posts = JSON.parse(localStorage.getItem("posts"));
      displayPosts();
  }

  // Show the post creation form
  newPostButton.addEventListener("click", function() {
      postFormContainer.style.display = "block";
      newPostButton.style.display = "none";  // Hide the create button when form is visible
  });

  // Cancel creating post
  cancelPostButton.addEventListener("click", function() {
      postFormContainer.style.display = "none";
      newPostButton.style.display = "inline-block";  // Show the create button again
  });

  // Handle form submission
  postForm.addEventListener("submit", function(e) {
      e.preventDefault();

      // Get the post data
      const postTitle = document.getElementById("postTitle").value;
      const postContent = document.getElementById("postContent").value;
      const contactAddress = document.getElementById("contactAddress").value;

      // Create a new post object with contact address
      const newPost = {
          title: postTitle,
          content: postContent,
          contactAddress: contactAddress // Store contact address
      };

      // Add the new post to the array and save it to localStorage
      posts.push(newPost);
      localStorage.setItem("posts", JSON.stringify(posts));
      displayPosts();

      // Reset the form
      postForm.reset();
      postFormContainer.style.display = "none";
      newPostButton.style.display = "inline-block";
  });

  // Function to display posts
  function displayPosts() {
      postsList.innerHTML = "";  // Clear previous posts

      posts.forEach(function(post) {
          const postElement = document.createElement("div");
          postElement.classList.add("post");

          const postTitle = document.createElement("h3");
          postTitle.textContent = post.title;

          const postContent = document.createElement("p");
          postContent.textContent = post.content;

          const postContact = document.createElement("p");
          postContact.textContent = `Contact: ${post.contactAddress}`;

          postElement.appendChild(postTitle);
          postElement.appendChild(postContent);
          postElement.appendChild(postContact);

          postsList.appendChild(postElement);
      });
  }
});

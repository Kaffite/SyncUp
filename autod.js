const postForm = document.getElementById('post-form');
const postsList = document.getElementById('posts-list');

postForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  const nameInput = document.getElementById('name');
  const postInput = document.getElementById('post-content');

  // Create a new post element
  const newPost = document.createElement('div');
  newPost.textContent = `${nameInput.value}: ${postInput.value}`;

  // Add the new post to the list
  postsList.appendChild(newPost);

  // Clear the form inputs
  nameInput.value = '';
  postInput.value = '';
});
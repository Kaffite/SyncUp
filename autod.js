function postMessage() {
    const postContent = document.getElementById('postContent').value;
    if (postContent.trim() !== '') {
        const post = document.createElement('div');
        post.className = 'post';
        post.textContent = postContent;
        document.getElementById('postsContainer').prepend(post);
        document.getElementById('postContent').value = '';
    }
}

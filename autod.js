document.querySelector('#add-post').addEventListener('submit', function (e) {
    e.preventDefault();

    const postContent = e.target.querySelector('.post-content').value.trim();

    if (postContent !== '') {
        // Loo uus postituse element
        const newPost = document.createElement('div');
        newPost.className = 'post';
        newPost.textContent = postContent;

        // Lisa uus postitus nimekirja algusesse
        const postList = document.querySelector('#post-list');
        postList.prepend(newPost);

        // Tühjenda sisestusväli
        e.target.querySelector('.post-content').value = '';
    } else {
        alert("Palun sisesta postituse tekst! 😊");
    }
});

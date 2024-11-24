document.addEventListener("DOMContentLoaded", function () {
    const newPostButton = document.getElementById("newPostButton");
    const postFormContainer = document.getElementById("postFormContainer");
    const postForm = document.getElementById("postForm");
    const postsList = document.getElementById("postsList");
    const cancelPostButton = document.getElementById("cancelPostButton");

    const API_URL = "http://localhost:3000/posts"; // Backend serveri aadress

    // Lae postitused serverist
    function loadPosts() {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
                displayPosts(data);
            })
            .catch((error) => console.error("Error fetching posts:", error));
    }

    // Näita postituste vormi
    newPostButton.addEventListener("click", function () {
        postFormContainer.style.display = "block";
        newPostButton.style.display = "none";
    });

    // Tühista postituse loomine
    cancelPostButton.addEventListener("click", function () {
        postFormContainer.style.display = "none";
        newPostButton.style.display = "inline-block";
    });

    // Postituse lisamine
    postForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Vältida vormi automaatset saatmist
        console.log('Form submitted');  // Kontrollige, kas see jõuab siia

        const newPost = {
            title: document.getElementById("postTitle").value,
            content: document.getElementById("postContent").value,
            contactAddress: document.getElementById("contactAddress").value,
        };

        if (!newPost.title || !newPost.content || !newPost.contactAddress) {
            alert("Palun täitke kõik väljad!");
            return;
        }

        // Saada uus post serverisse
        fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        })
            .then((response) => response.json())
            .then(() => {
                loadPosts(); // Lae uuesti postitused
                postForm.reset(); // Tühjenda vorm
                postFormContainer.style.display = "none";
                newPostButton.style.display = "inline-block";
            })
            .catch((error) => console.error("Error adding post:", error));
    });

    // Kuvamise funktsioon
    function displayPosts(posts) {
        postsList.innerHTML = ""; // Puhasta eelmine sisu
        posts.forEach((post) => {
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

    // Lae postitused, kui leht on laaditud
    loadPosts();
});

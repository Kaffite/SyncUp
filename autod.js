// Postituste massiiv
let postList = [];

// Kuulame vormi submit sündmust
document.querySelector('#add-post').addEventListener('submit', function(e) {
  // Väldi vormi saatmisega lehe uuesti laadimist
  e.preventDefault();

  // Kontrolli, et postitus poleks tühi
  if (e.target.querySelector('.post-content').value != "") {
    // Lisa uus postitus massiivi
    let newPost = {"text": e.target.querySelector('.post-content').value, "drawn": false};
    postList.push(newPost);

    // Tühjenda sisestusväli
    e.target.querySelector('.post-content').value = "";

    // Kutsu välja funktsioon, mis joonistab postitused
    createPosts();
  } else {
    alert("Palun sisesta tekst enne postitamist! 😊");
  }
});

// Funktsioon postituste kuvamiseks
function createPosts() {
  // Läbime kogu postituste massiivi
  for (var i = 0; i < postList.length; i++) {
    // Kui postituse 'drawn' omadus on false, tähendab see, et postitus pole veel kuvatud
    if (postList[i].drawn == false) {
      // Loo uus postituse element
      let newPost = document.createElement('div');
      newPost.className = "post";
      newPost.innerText = postList[i].text;

      // Lisa postitus nimekirja algusesse
      document.querySelector('#post-list').insertBefore(newPost, document.querySelector('#post-list').firstChild);

      // Määra, et postitus on nüüd "drawn", et hiljem mitte uuesti kuvada
      postList[i].drawn = true;
    }
  }
}

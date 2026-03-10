function searchGame(){

let keyword = document
.getElementById("searchInput")
.value
.toLowerCase()

window.location.href =
"category.html?search=" + keyword

}


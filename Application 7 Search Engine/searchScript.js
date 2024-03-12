const accessKey = "2OR4qoYTqYJAtGYfWYbSXk4cuNnLzZrW6tEfjuWBy6U";

const searchBar = document.getElementById("searchBar");
const searchText = document.getElementById("searchText");
const searchResults = document.getElementById("searchResults");
const showMore = document.getElementById("showMore");
const searchHistory = document.getElementById("searchHistory");
const historyContainer = document.getElementById("searchList");

let searchWord = "";
let page = 1;
let searchArchive = [];
let searchLength = 1;

async function searchImages(){
    searchWord = searchText.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchWord}&client_id=${accessKey}&per_page=18`;

    if (searchWord == ""){
        alert("Please input something to search");
    }
    else{
        searchArchive.push(searchWord);
        localStorage.setItem("searchHistory", JSON.stringify(searchArchive)); 
    
    
        const response = await fetch(url);
        const data = await response.json();
    
        console.log(data);
    
        const results = data.results;
    
        console.log(results);
    
        results.map((result) =>{
            const image = document.createElement("img");
            image.src= result.urls.small;
            const imageLink = document.createElement("a");
            imageLink.href = result.links.html;
            imageLink.target =  "_blank";
    
            imageLink.appendChild(image);
            searchResults.appendChild(imageLink);
    
        })
        if (searchWord != ""){
            showMore.style.display = "block";
        };

        addSearchitem();
        searchLength++;
    }

    console.log(searchArchive);
}

searchBar.addEventListener("submit", (e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
});

showMore.addEventListener("click", ()=>{
    page++;
    searchImages();
});

function addSearchitem(){
    let historyItem = document.createElement("div");
    historyItem.style.width = "300px";
    historyItem.style.height = "100px";
    historyItem.style.fontSize = "50px";
    historyItem.style.color = "#3C2D8B"; 
    historyItem.style.margin = "auto";
    historyItem.style.marginTop = "20px";
    historyItem.style.textAlign = "center";
    historyItem.style.fontFamily = "Ojuju";
    historyItem.innerHTML = searchLength + ":   " + searchWord;

    historyContainer.appendChild(historyItem);
}



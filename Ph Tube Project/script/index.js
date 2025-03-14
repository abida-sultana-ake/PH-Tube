// Function to load categories
function loadCategories() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(response => response.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.error("Error fetching categories:", error));
}

// Function to display categories
function displayCategories(categories) {
    const categoryContainer = document.getElementById("category-container");
    categories.forEach(cat => {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
        <button class="btn btn-sm bg-gray-300 hover:bg-[#FF1F3D] hover:text-white p-3">${cat.category}</button>
    `;
    categoryContainer.append(categoryDiv);
});

}    

// Function to load videos
function loadVideos() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then(response => response.json())
        .then(data => displayVideos(data.videos))
        .catch(error => console.error("Error fetching videos:", error));
}

// Function to display videos
const displayVideos = (videos) => {
    const videoContainer = document.getElementById("video-container");

    videos.forEach(video => {
        const videoCard = document.createElement("div");
        videoCard.innerHTML = `
            <div class="card bg-base-100">
                <figure class="relative">
                    <img class="w-full h-[150px] object-cover" src="${video.thumbnail}" alt="Video" />
                    <span class="absolute text-xs text-white bg-[#171717] px-2 rounded bottom-2 right-2">3hrs 56 min ago</span>
                </figure>
                <div class="flex gap-3 px-0 py-5">
                    <div class="overflow-hidden">
                        <img class="w-8 rounded-full" src="${video.authors[0].profile_picture}" alt="" />
                    </div>
                    <div class="intro">
                        <h2 class="text-xs font-bold">${video.title}</h2>
                        <p class="text-sm text-gray-400 flex gap-2 my-3">${video.authors[0].profile_name}
                        <img class="w-6 h-6" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></p>
                        <p class="text-sm text-gray-400">${video.others.views} views</p>
                    </div>
                </div>
            </div>
        `;
        videoContainer.append(videoCard);
    });
};

// Load categories and videos when the page loads
loadCategories();
loadVideos();
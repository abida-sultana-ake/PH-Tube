//button
function loadCategories() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(response => response.json())
    .then(data => displayCategories(data.categories))
}
function displayCategories(categories)
{
    const categoryContainer = document.getElementById("category-container");
    for(let cat of categories){
        console.log(cat);
         const categoryDiv = document.createElement("div");
         categoryDiv.innerHTML = `
         <button class="btn bg-[#17171719] text-black p-5 hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `;
        categoryContainer.append(categoryDiv);
    }

}

loadCategories();
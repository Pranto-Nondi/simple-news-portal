const categoriesFetchData = () => {
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            displayCategoriesName(data.data)
        })
}




displayCategoriesName = (data) => {
    console.log(data);
    const categories = document.getElementById("categories");
    const { news_category } = data;
    news_category.forEach(category => {
        categories.innerHTML += `  <a class="nav-link active" onclick="fetchCategoryFound('${category.category_id}','${category.category_name}')" href="#">${category.category_name}</a>`
    });

}

const fetchCategoryFound = (id, categoryName) => {
    console.log(id, categoryName)
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            displayCategoryFound(data.data, categoryName)

        })


}

displayCategoryFound = (data, categoryName) => {
    console.log(data)
    document.getElementById("count").innerText = data.length;
    document.getElementById("categeroy-name").innerText = categoryName;




}





categoriesFetchData();
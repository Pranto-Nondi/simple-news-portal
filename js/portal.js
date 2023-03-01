const categoriesFetchData = () => {
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            displayCategoriesData(data.data)
        })
}




displayCategoriesData = (data) => {
    console.log(data);
    const categories=document.getElementById("categories");
    const { news_category } = data;
    news_category.forEach(category => {
        categories.innerHTML+=`  <a class="nav-link active" href="#">${category.category_name}</a>`
    });

}

categoriesFetchData();
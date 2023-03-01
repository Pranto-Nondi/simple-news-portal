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
            displayCategory(data.data, categoryName)

        })


}

displayCategory = (data, categoryName) => {
    console.log(data)
    document.getElementById("count").innerText = data.length;
    document.getElementById("categeroy-name").innerText = categoryName;
    document.getElementById("categories-conatiner").innerHTML = "";
    data.forEach(element => {
        const { details, image_url, title } = element
        document.getElementById("categories-conatiner").innerHTML += `
        <div class="card mb-3" >
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${image_url}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${title}</h5>
                                <p class="card-text">${details.slice(0, 200)}</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
        `
    })


}





categoriesFetchData();
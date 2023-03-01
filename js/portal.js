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
        const {_id, details, image_url, title, author, total_view, rating, category_id } = element
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
                                <div class="d-flex justify-content-around align-items-center">
                               
                                <div class="d-flex justify-content-center align-items-center gap-1 ">
                                <div>
                                <img src="${author.img}" class="img-fluid rounded-circle" height="40" width="40" />
                                 </div>
                                <div>
                                <p class="m-0 p-0">${author.name}</p>
                                <p class="m-0 p-0">${author.published_date}</p>
                                </div>
                                 </div>
                               <div class="d-flex align-items-center justify-content-center gap-2">
                               <i class="fa-regular fa-eye"></i>
                               <p class="m-0 p-0">${total_view}</p>
                               </div>
                               <div class="d-flex align-items-center justify-content-center gap-2">
                               <i class="fa-regular fa-star"></i>
                               <i class="fa-regular fa-star"></i>
                               <i class="fa-regular fa-star"></i>
                               <i class="fa-regular fa-star"></i>
                               <i class="fa-regular fa-star"></i>
                                <div> 
                                <p class="m-0 p-0" >${rating.number}</p>
                                </div>
                               </div>
                               <div class="d-flex ">
                               <i data-bs-target="#categoryModal" data-bs-toggle="modal" class="fa-sharp fa-solid fa-angle-right" onclick="fetchSingleDetails('${_id}')"></i>
                               </div></div>
                            </div>
                        </div>
                    </div>
                </div>
        `
    })


}


const fetchSingleDetails = (_id) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${_id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            showSingleCategoryDetails(data.data[0])
        })

}

showSingleCategoryDetails = (data) => {
    console.log(data);
    const {_id, details, image_url, title, author, total_view, rating, category_id } = data;
    document.getElementById("modal-body-category").innerHTML = `
    <div class="card mb-3" >
    <div class="row g-0">
        <div class="col-md-12">
            <img src="${image_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-12">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${details.slice(0, 200)}</p>
                <div class="d-flex justify-content-around align-items-center">
               
                <div class="d-flex justify-content-center align-items-center gap-1 ">
                <div>
                <img src="${author.img}" class="img-fluid rounded-circle" height="40" width="40" />
                 </div>
                <div>
                <p class="m-0 p-0">${author.name}</p>
                <p class="m-0 p-0">${author.published_date}</p>
                </div>
                 </div>
               <div class="d-flex align-items-center justify-content-center gap-2">
               <i class="fa-regular fa-eye"></i>
               <p class="m-0 p-0">${total_view}</p>
               </div>
               <div class="d-flex align-items-center justify-content-center gap-2">
               <i class="fa-regular fa-star"></i>
               <i class="fa-regular fa-star"></i>
               <i class="fa-regular fa-star"></i>
               <i class="fa-regular fa-star"></i>
               <i class="fa-regular fa-star"></i>
                <div> 
                <p class="m-0 p-0" >${rating.number}</p>
                </div>
               </div>
        </div>
    </div>
</div>
    
    `

}


categoriesFetchData();
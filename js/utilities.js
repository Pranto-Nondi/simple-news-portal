// data store and copy

let storeData = [];
let rawData = []
//display category ui by using data with name

displayCategory = (data, categoryName) => {

    document.getElementById("count").innerText = data.length;
    document.getElementById("categeroy-name").innerText = categoryName;
    document.getElementById("categories-container").innerHTML = "";
    data.forEach(element => {

        const { _id, details, image_url, title, author, total_view, rating, category_id, others_info } = element
        const publishedDate = new Date(author.published_date).toLocaleString().slice(0, 10)
        console.log(publishedDate)
        document.getElementById("categories-container").innerHTML += `
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
                                <p class="m-0 p-0">${author.name === null || author.name === "" ? "Not available" : author.name}</p>
                                <p class="m-0 p-0">${publishedDate === null || publishedDate === "" ? "upadate Soon" : publishedDate}</p>
                                </div>
                                 </div>
                               <div class="d-flex align-items-center justify-content-center gap-2">
                               <i class="fa-regular fa-eye"></i>
                               <p class="m-0 p-0">${total_view === null ? 0 : total_view}</p>
                               </div>
                               <div class="d-flex align-items-center justify-content-center gap-2">
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-sharp fa-solid fa-star-half"></i>
                                <div> 
                                <p class="m-0 p-0" >${rating.number}</p>
                                </div>
                               </div>
                               <div class="d-flex ">
                               <i  data-bs-target="#categoryModal" data-bs-toggle="modal" class="fa-sharp fa-solid fa-angle-right" onclick="fetchSingleDetails('${_id}')"></i>
                               </div></div>
                            </div>
                        </div>
                    </div>
                </div>
        `
    })


}

// fetch  single details by id

const fetchSingleDetails = (_id) => {


    fetch(`https://openapi.programming-hero.com/api/news/${_id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.data[0])
            showSingleCategoryDetails(data.data[0])
        })

}

// modal open single details

showSingleCategoryDetails = (data) => {

    const { _id, details, image_url, title, author, total_view, rating, category_id, others_info } = data;
    const publishedDate = new Date(author.published_date).toLocaleString().slice(0, 10)
    document.getElementById("modal-body-category").innerHTML = `
    <div class="card mb-3" >
    <div class="row g-0">
        <div class="col-md-12">
            <img src="${image_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-12">
            <div class="card-body">
                <h5 class="card-title">${title}.
                <span style="background:yellow" class="fs-5 border-2">${others_info.is_trending ? "Trending" : "Not Trending"}</span>
                </h5>
               
                <p class="card-text">${details.slice(0, 200)}</p>
               
                <div class="d-flex justify-content-around align-items-center">
               
                <div class="d-flex justify-content-center align-items-center gap-1 ">
                <div>
                <img src="${author.img}" class="img-fluid rounded-circle" height="40" width="40" />
                 </div>
                <div>
                <p class="m-0 p-0">${author.name === null || author.name === "" ? "Not available" : author.name}</p>
                <p class="m-0 p-0">${publishedDate === null || publishedDate === "" ? "upadate Soon" : publishedDate}</p>
                </div>
                 </div>
               <div class="d-flex align-items-center justify-content-center gap-2">
               <i class="fa-regular fa-eye"></i>
               <p class="m-0 p-0">${total_view === null ? 0 : total_view}</p>
               </div>
               <div class="d-flex align-items-center justify-content-center gap-2">
               <i class="fa-sharp fa-solid fa-star"></i>
               <i class="fa-sharp fa-solid fa-star"></i>
               <i class="fa-sharp fa-solid fa-star"></i>
               <i class="fa-sharp fa-solid fa-star"></i>
               <i class="fa-solid fa-star-half"></i>
                <div> 
                <p class="m-0 p-0" >${rating.number}</p>
                </div>
               </div>
        </div>
    </div>
</div>
    
    `

}
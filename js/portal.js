

// all category fetch 
const categoriesFetchData = () => {
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            displayCategoriesName(data.data)
        })
}

//  only all category  name in ui display 

displayCategoriesName = (data) => {

    const categories = document.getElementById("categories");
    const { news_category } = data;
    news_category.forEach(category => {
        categories.innerHTML += `  <a class="nav-link active" onclick="fetchCategoryFound('${category.category_id}','${category.category_name}')" href="#">${category.category_name}</a>`
    });

}


/// fetch category  by using category id with name

const fetchCategoryFound = (id, categoryName) => {

    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            storeData = data.data;
            rawData = [...storeData];
            displayCategory(data.data, categoryName)

        })

}

// trending

trending = () => {
    const trendingData = storeData.filter(data => data.others_info.is_trending === true
    )
    const categoryName = document.getElementById("categeroy-name").innerText;
    displayCategory(trendingData, categoryName)

}

// todays pick


const todaysPick = () => {
    const todayPickData = storeData.filter(data => data.others_info.is_todays_pick === true)
    const categoryName = document.getElementById("categeroy-name").innerText;
    displayCategory(todayPickData, categoryName)

}

// ascending and descending sort view


selectSort = () => {
    const categoryName = document.getElementById("categeroy-name").innerText;
    const select = document.getElementById("sorting");
    if (select.value === 'ascending') {
        const Ascending = storeData.sort((a, b) => a.total_view - b.total_view);
        displayCategory(Ascending, categoryName)
    }
    else if (select.value === 'descending') {

        const Descending = storeData.sort((a, b) => b.total_view - a.total_view);
        displayCategory(Descending, categoryName)
    }
    else {
        displayCategory(rawData, categoryName)
    }

}


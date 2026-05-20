fetch("https://dummyjson.com/products").then((response) => {
    return response.json()}).then((data) => {
        data.products.map((a) => {
            console.log(a.brand);
        })
    })
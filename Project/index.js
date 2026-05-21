fetch("https://dummyjson.com/products").then((response) => {
    return response.json()}).then((data) => {
        let body=document.querySelector("body")
        data.products.map((a) => {
             console.log(a);
             body.innerHTML+=`<div style="border:1px solid black; 
             padding:20px;
                margin:20px;
                width:300px;
                border-radius:21px;">
                <img src="${a.thumbnail}"
                width:100px;>
                <h2>${a.title}</h2>
                <h2>${a.brand}</h2>
                <h2>${a.price}</h2>
                <h2>${a.rating}</h2>
                <button onclick="addToCart(${a.id})">Add to Cart</button>
                </div>`    
        })
        window.allP=data.products
    })
    console.log(window);
    function addToCart(id){
        let data=window.allP.find((a)=>{
            return a.id===id
        });
        console.log(data);
        localStorage.setItem("item", JSON.stringify(data))
            }
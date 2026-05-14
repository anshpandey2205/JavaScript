// let promise = new Promise((res, reject) => {
//     //res()
//     reject()

// })
// promise.then(()=>{
//     console.log("donee");
// })
// .catch(()=>{
//     console.log("error");
// })
// console.log(promise)

function step1(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("selected")
            res()
        }, 6000)
    })
}

function step2(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("captionsss")
            res()
        }, 3000)
    })
}

async function call(){
    await step1()
    await step2()
}
call()

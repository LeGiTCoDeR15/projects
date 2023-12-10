// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Hello P1");
//     }, 2000);
//     resolve(true);
// });

// let p2 = new Promise((resolve, reject)=>{
//     resolve("ABCD");
// });

// p1.then(()=>{
//     return p2;
// });

// p2.then((value)=>{
//     console.log(value);
// });

async function weather(){
    let delhiWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Delhi : Garmi Hai...");
        }, 1000);
    });

    let mumbaiWeather = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Mumbai : Thanda hai");
        }, 5000);
    });

    let dW = await delhiWeather;
    let mW = await mumbaiWeather;

    return [dW, mW];
    
}

weather().then((value)=>console.log(value));


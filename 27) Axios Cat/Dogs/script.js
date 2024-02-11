let btn = document.querySelector("button");
let para = document.getElementById("result");
let img = document.querySelector("img");

const config = { headers: { accept: "application/json" } };

btn.addEventListener("click", async () => {
    let fact = await getFacts();
    para.innerText = fact;

    let dogImg = await getDogImg();
    img.src = dogImg;
});

let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("Error: ", e);
        return "No Fact Found";
    }
}

async function getDogImg() {
    try {
        let res = await axios.get(url2);
        console.log(res);
        return res.data.message;
    } catch (e) {
        console.log("Error: ", e);
        return "No Image Found";
    }
}

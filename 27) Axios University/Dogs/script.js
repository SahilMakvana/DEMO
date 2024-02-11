let btn = document.querySelector("button");
let ul = document.querySelector("ul");

const config = { headers: { accept: "application/json" } };

btn.addEventListener("click", async () => {
    ul.innerText = "";

    let country = document.querySelector("input").value;
    let collages = await getUniversities(country);
    console.log(collages);
    for (collage of collages) {
        let li = document.createElement("li");
        li.innerText = collage.name;
        ul.appendChild(li);
    }
});

let url = "http://universities.hipolabs.com/search?country=";

async function getUniversities(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (e) {
        console.log("Error: ", e);
        return [];
    }
}

window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    //JS goes here:
    const btn = document.getElementById("btn");
    btn.addEventListener("click", (event) => {
        document.querySelector("p").className="hilite";
    });
});

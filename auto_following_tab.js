console.log("start");
window.addEventListener("load", (event) => {
    console.log("page loaded func start");
    setTimeout(() => {
        const spanFollowing = document.querySelectorAll("a.r-6416eg[tabindex='-1']")[0];
        spanFollowing.click();        
    }, 1000);
    console.log("page loaded func done");
});
console.log("done");

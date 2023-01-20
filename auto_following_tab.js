window.addEventListener("load", (event) => {

    const followingAction = () => {
        const spanFollowing = document.querySelector("a.r-6416eg[tabindex='-1']");
        spanFollowing.click();
    }

    setTimeout(() => {
        // perform switch when landing on home
        if (window.location.href == "https://twitter.com/home") {
            followingAction();
        }
        
        // if on any tab other than home, grab the home tab element and create click event
        else {
            const homeTab = document.querySelector("a[data-testid='AppTabBar_Home_Link']");
            homeTab.addEventListener("click", function handler() {
                setTimeout(() => {
                    followingAction();
                    // remove listener to prevent switching between 'For You'/'Following' everytime
                    // user goes to home tab
                    homeTab.removeEventListener("click", handler);
                }, 1500);  // wait 1.5 seconds for 'Following' tab to build
            });
        }
    }, 1000);

});

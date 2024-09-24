//Define a function to scroll to the top of the page
function scrollToTop() {
    //Scroll to the top of the page with smooth behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        // behavior: 'instant'
    });
}

//Export the scrollToTop function
export default scrollToTop;
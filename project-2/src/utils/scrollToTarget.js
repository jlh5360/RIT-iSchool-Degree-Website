//Define a function to scroll to a specified target element
function scrollToTarget(id, offset = 7.5) {
    //Get the target element by its ID
    const element = document.getElementById(id);
    
    //Check if the element exists
    if (element) {
        //Calculate the offset position
        const offsetPosition = element.offsetTop - offset * parseFloat(getComputedStyle(document.documentElement).fontSize);
        
        //Scroll to the offset position with smooth behavior
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
            // behavior: 'instant'
        });
    }
}

//Export the scrollToTarget function
export default scrollToTarget;
/*The above code will make the imagens expand
We want that the class active changes between de divs
The first image is the default <class='panel active'
*/

const panels = document.querySelectorAll('.panel'); //That way we select All the panels we have, that also creates a div list with all our images, we can check that with console.log(panels)

/* Here we are giving forEach to our variable panels, and putting the parameter panel
inside of that function. With that, we can add the event listener to our const ant than 
when we click, that will return another function that will change our panels to panels active*/
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        //Calling the function that removes the Active Class from the panels, that way only 1 will have the parameter active
        removeActiveClasses()
        panel.classList.add('active') 
    });

});

//Creating the function that will remove the active class
function removeActiveClasses() {
    panels.forEach(panel => { //We dont need the () here because our function only have 1 parameter
        panel.classList.remove('active')
    });

};

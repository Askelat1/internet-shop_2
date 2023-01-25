// Katalog

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

  // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
            }
        }
    }
}

// Show more
const showMore = document.querySelector('.show__more');
const productsLength = document.querySelectorAll('.col_md_3').length;
let items = 7;

console.log(showMore)
showMore.addEventListener('click', () => {
	items += 7;
	const array = Array.from(document.querySelector('.row').children);
	const visItems = array.slice(0, items);

	visItems.forEach(el => el.classList.add('is-visible'));

    if (visItems.length === productsLength) {
		showMore.style.display = 'none';
	}

});




// pop_up
const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById ('pop_up');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', ()=> {
    popUp.classList.remove('active');
})
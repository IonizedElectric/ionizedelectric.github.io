var scrollLock = 0

const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	
	burger.addEventListener('click',()=> {
	    //Scroll to top
		window.scrollTo(0, 0);
	    //Disable scrolling
		if (scrollLock==0) {
			disableScroll()
		} else {
			enableScroll()
		}
	    nav.classList.toggle('nav-active');
		//Animate Links
		navLinks.forEach((link, index)=> {
			if (link.style.animation) {
				link.style.animation = ''
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
			}
		});
		//Burger Animation
		burger.classList.toggle('toggle');
	});
}

function disableScroll() { 
    scrollLock = 1
    // Get the current page scroll position 
    scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
  
        // if any scroll is attempted, set this to the previous value 
        window.onscroll = function() { 
            window.scrollTo(scrollLeft, scrollTop); 
        }; 
} 
  
function enableScroll() { 
    scrollLock = 0
    window.onscroll = function() {}; 
} 

function dropDown() {
  var x = document.getElementById("dropdown");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const app = () => {
    navSlide();
}

app();
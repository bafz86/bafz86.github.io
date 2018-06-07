	function enteringweb(){
		var hello = alert("Welcome to my website! It's a work in progress, so please don't judge!");
		return hello;
		}
	function leavingweb() {
		var bye = alert("How impressed were you with this design? (1-10)");
		return bye;
		}
	function myFunction() {
		document.getElementById("myDropdown").classList.toggle("show");
		}
	window.onclick = function(event) {
		if(!event.target.matches('.dropbtn')) {
			var dropdowns = document.getElementsByClassName("dropdown-content");
			var i;
			for (i =0; i < dropdowns.length; i++) {
				var openDropdown = dropdowns[i];
				if (openDropdown.classList.contains('show')) {
					openDropdown.classList.remove('show');
				}
			}
		}
	}
var call_btn = document.querySelector(".search-hotel");
var search_form = document.querySelector(".search-form");

call_btn.addEventListener("click", function (e) {
	e.preventDefault();
	search_form.classList.toggle("search-form-none");
});

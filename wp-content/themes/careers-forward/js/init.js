// *************************************
//
//   Init.js
//   -> This is the init script file
//
// *************************************

// -------------------------------------
//   Is Desktop Logic
//   -> Checks if we are in desktop of mobile view. Returns true or false.
// -------------------------------------

// $g_is_desktop = !$("[.menu-link]").is(":visible");
// $(window).resize(function() {
// 	$g_is_desktop = !$(".menu-link").is(":visible");
// });

// -------------------------------------
//   Matches Console Log Shorthand 
// -------------------------------------

function cl(clOption){
	if($.isArray(clOption)){
		$.each(clOption,function(k,v){
			console.log(v);
		});
	}else {
		console.log(clOption);
	}
}

$(document).ready(function() {


	
});
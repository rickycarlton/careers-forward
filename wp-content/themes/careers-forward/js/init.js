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

	var windowWidth = $(window).width();
	var $is_desktop = windowWidth > 799;

	// smartresize

	(function($,sr){
	 
	  // debouncing function from John Hann
	  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
	  var debounce = function (func, threshold, execAsap) {
	      var timeout;
	 
	      return function debounced () {
	          var obj = this, args = arguments;
	          function delayed () {
	              if (!execAsap)
	                  func.apply(obj, args);
	              timeout = null; 
	          };
	 
	          if (timeout)
	              clearTimeout(timeout);
	          else if (execAsap)
	              func.apply(obj, args);
	 
	          timeout = setTimeout(delayed, threshold || 100); 
	      };
	  }
		// smartresize 
		jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };
	 
	})(jQuery,'smartresize');

	// hamburger menu

	(function () {
		$('.hamburger-menu').on('click', function() {
			$('.bar').toggleClass('animate');
			$('.navBar__mobileNav').toggleClass('is-active');
		})
	})();

	// matchHeight plugin

	function matchHeightFunction() {
		if ($is_desktop) {
			$('.matchHeight').matchHeight({
			    target: $('.matchHeight-parent')
			});

		    $(window).smartresize(function() {
		    	$('.matchHeight').height('auto');
		    	if ($is_desktop) {
		    		$('.matchHeight').matchHeight({
				        target: $('.matchHeight-parent')
				    });
		    	}
		    });
		}
	}
	matchHeightFunction();

	$(window).smartresize(function(){  
		matchHeightFunction();
	});

});
// @codekit-prepend "../bower_components/jquery/dist/jquery.js"
// @codekit-prepend "../bower_components/modernizer/modernizr.js"

var windowWidth = $(window).width();

$(document).ready(function(){
	//#SVG Fallback
	if (!Modernizr.svg) {
	    var imgs = document.getElementsByTagName('img');
	    var svgExtension = /.*\.svg$/;
	    var l = imgs.length;
	    for(var i = 0; i < l; i++) {
	        if(imgs[i].src.match(svgExtension)) {
	            imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
	        }//if
	    }//for
	}//if

});
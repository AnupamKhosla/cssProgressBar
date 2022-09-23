'use strict';

!function(){
	// on dom content loaded
	document.addEventListener("DOMContentLoaded", function(event) {	
		var counter = window.getComputedStyle(document.querySelector('.percent'), "::before").getPropertyValue("counter-increment");
		counter = parseInt(counter.substr(5));
		var sixthRemFraction = (100 - counter)/6;	
		document.body.classList.add('domLoaded');
		
		var time = window.getComputedStyle(document.querySelector('html')).getPropertyValue("--time");		
		time = parseInt(time.substr(0, time.length - 1)) * 1000; //millseconds			
		var progressWidth = getComputedStyle(document.querySelector('.progress')).width;		
		document.querySelector('.progress').style.width = progressWidth;
		document.querySelector('.progress').style.animation = 'none';

		requestAnimationFrame(function(){
			//this will make sure that the nested code is executed only after a slight delay and before next browser repaint
			document.querySelector('.progress').style.width = "100%";
			document.querySelector('.percent').textContent = counter + "%";	
			var interval = setInterval(function() {
				counter = counter + sixthRemFraction;							
				if (counter >= 100) {
					document.querySelector('.percent').textContent = "100" + "%";
					clearInterval(interval);
				}
				else {
					document.querySelector('.percent').textContent = Math.floor(counter) + "%";
				}
			}, time/6); //50ms interval for .3second delay
		});

        //get page laod time
		var timeLoad = performance.timing;
		let pageloadtime = timeLoad.domContentLoadedEventStart - timeLoad.navigationStart;		 
	    pageloadtime = pageloadtime/1000; //seconds
	    document.querySelector('h2.timeDom').textContent = 'DOM Content Loaded in ' + pageloadtime + 'seconds';
	});
}();

#  cssProgressBar
## https://anupamkhosla.github.io/cssProgressBar/


### Smart progress bar showing how much a webpage has been loaded, only using css and mininal javascript.



This code can be reused on any web project. The progress bar doesn't correspond to the real bytes downloaded by the webpage. This progress bar goes from 0 to 80% loaded in 2 seconds and then exponentially slows down it's speed. Then in the next 7 seconds it goes from 80 to 95 percent and waits for domContentLoaded to be fired. If domContentLoaded is fired at any instances from 0 to 10 seconds, then progress bar quickly(.3s) goes to 100%. For a real progress bar, you'd need the size of the page in bytes precalculated from server side and pass that information as text, then with js you can use performance api to get how many bytes have been downloaded at any instance. 

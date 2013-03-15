TableSort by Alireza Balouch
=========

Making tables nice and clean and sortable.
This script sorts numbers in the right order.

If you use table for design a page then you should not use this or anything within the web.
... but if you do it right and do not use table for design and only for listing thing (the correct way of using tables), then you can use this.

just include the latest jQuery (1.9+) and the css and js files
add you are good to go.

if you have load the table dynamicly to the page with ajax then you can call tableSorter(); like this:

jQuery(function($){
	tableSorter();
});

I have added the Norwegian letters (ÆØÅ) in the right sorting order. If need to add more or re-order the deafult sort order, then add it to this array:

var arrSc = {"Æ":"X1", "Ø":"X2" ,"Å": "X3"};// adding non sortable signs after X


PS: this is not a jQuery plug-ins. But rather a smal script to change and evolve.
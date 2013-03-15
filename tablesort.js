jQuery(function($){
	tableSorter();
});


function tableSorter(){
	  $('table').each(function(){
		  var thisTable = $(this);
		  thisTable.addClass('sortable');
		  thisTable.find('th').each(function(i){
			  $(this).data('rpos', i);
		  });
	  });
	  
	  $('.sortable th').on('click',function(){
		var thisTable = $(this).closest('table');
		var thisRPos = $(this).data('rpos');
		var sortDir = 0;
		$('.sortable th').removeClass('sortdes');
		$('.sortable th').removeClass('sortasc');
		if($(this).data('sortDir') == 1){
			sortDir = 1;
			$(this).addClass('sortdes').data('sortDir' , 0 );
		}else{
			$(this).addClass('sortasc').data('sortDir' , 1 );
		}
		var arrTr = thisTable.find('tbody tr').get();
		arrTr.sort(function(a,b){
			var compA = $(a).children('td').get() ;
			var compB = $(b).children('td').get() ;
			var myval1 = '';
			var myval2 = '';
			   
			if(typeof compA[thisRPos] != 'undefined' ){
				myval1 = $(compA[thisRPos]).text().toUpperCase();
			}
			if(typeof compB[thisRPos] != 'undefined' ){
				myval2 = $(compB[thisRPos]).text().toUpperCase();
			}
			
			var arrSc = {"Æ":"X1", "Ø":"X2" ,"Å": "X3"};// adding non sortable signs after X

			for(var bval in arrSc){
				myval1 = myval1.replace(new RegExp(bval, "g"), arrSc[bval]);
				myval2 = myval2.replace(new RegExp(bval, "g"), arrSc[bval]);
			}
    
			myval1 = (parseInt(myval1) == myval1 && parseInt(myval2) == myval2)?  parseInt(myval1) : myval1;
			myval2 = (parseInt(myval2) == myval2 && parseInt(myval1) == myval1)?  parseInt(myval2) : myval2;
			
			if(sortDir == 1){
				return (myval1 < myval2) ? -1 :(myval1 > myval2)? 1: 0;
			}else{
				return (myval1 > myval2) ? -1 :(myval1 < myval2)? 1: 0;
			}
		});
		  
		$.each(arrTr, function(idx, itm) { $(thisTable).find('tbody').append(itm); });
	  });
  }

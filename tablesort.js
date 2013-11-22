jQuery(function($){
	tableSorter('table');
});

function tableSorter(strWhat){
	$(strWhat).each(function(){
		var thisTable = $(this);
		thisTable.addClass('sortable');
		thisTable.find('th').each(function(i){
			$(this).data('rpos', i);
		});
	});

	$('.sortable').each(function(){
		$(this).find('th').on('click', function(){
			var thisTable = $(this).closest('table');
			var thisRPos = $(this).data('rpos');
			var sortDir = 0;

			$('.sortable th').removeClass('sortdes');
			$('.sortable th').removeClass('sortasc');
			if ($(this).data('sortDir') == 1){
				sortDir = 1;
				$(this).addClass('sortdes').data('sortDir', 0);
			} else {
				$(this).addClass('sortasc').data('sortDir', 1);
			}
			var arrTr = thisTable.find('tbody tr').get();
			arrTr.sort(function(a, b){
				var compA = $(a).children('td').get();
				var compB = $(b).children('td').get();
				var myval1 = (typeof compA[thisRPos] != 'undefined') ? $(compA[thisRPos]).text().toUpperCase() : '';
				var myval2 = (typeof compB[thisRPos] != 'undefined') ? $(compB[thisRPos]).text().toUpperCase() : '';
				var arrSc = {"Æ": "X1","Ø": "X2","Å": "X3"}; // adding non sortable signs after X
				for (var bval in arrSc){
					myval1 = (myval1 != '') ? myval1.replace(new RegExp(bval, "g"), arrSc[bval]) : '';
					myval2 = (myval1 != '') ? myval2.replace(new RegExp(bval, "g"), arrSc[bval]) : '';
				}
				myval1 = (typeof myval1 == 'string' && !isNaN(+myval1)) ? parseFloat(myval1) : myval1;
				myval2 = (typeof myval2 == 'string' && !isNaN(+myval2)) ? parseFloat(myval2) : myval2;

				if (sortDir == 1){
					return (myval1 < myval2) ? -1 : (myval1 > myval2) ? 1 : 0;
				} else {
					return (myval1 > myval2) ? -1 : (myval1 < myval2) ? 1 : 0;
				}
			});
			$.each(arrTr, function(idx, itm){
				$(thisTable).find('tbody').append(itm);
			});
		});
	});
}

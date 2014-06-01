// tableSort By Alireza Balouch

/*jslint browser:true */
document.addEventListener('DOMContentLoaded', function() {
	sortTables();
});

function sortTables(){
	var tables = document.getElementsByTagName('table'),thisTable = '', thead = '',ths = '',thisTh = '',a = 0,i=0;
	for(i = 0; i < tables.length; i++){
		thisTable = tables[i];
		thead = thisTable.getElementsByTagName('thead');
		if(thead.length == 1){
			ths = thead[0].getElementsByTagName('th');
			if(ths.length !== 0){
				for(a = 0; a < ths.length ;a++){
					thisTh = ths[a];
					thisTh.sortDir = 0;
					attachClick(thisTable , thisTh ,a);
				}
			}
		}
	}
}

function attachClick(thisTable , thisTh ,itmNr){
	thisTh.addEventListener('click', function() {
		resetClass(thisTable);
		thClicked(thisTh,thisTable,itmNr,thisTh);
	},false);
}

function resetClass(thisTable){
	var allth = thisTable.getElementsByTagName('th');
	for(var i = 0; i < allth.length; i++){
		allth[i].classList.remove('sortdes');
		allth[i].classList.remove('sortasc');
	}
}

function thClicked(thisItem , thisTable,itmNr,thisTh){
	var td = '',newArr = [],allTr = [] ,i=0,j=0;
	if(thisItem.sortDir === 0){
		thisItem.classList.add('sortdes');
	}else{
		thisItem.classList.add('sortasc');
	}
	allTr = thisTable.querySelectorAll('tbody tr');
	
	thisTh.sortDir = (thisTh.sortDir === 0)? 1 : 0;
	
	//making new matrix with values
	for(i = 0; i < allTr.length; i++){
		newArr[i] = [];
		td = allTr[i].getElementsByTagName('td');
		for(j= 0;j < td.length;j++){
				newArr[i].push([td[j], i]);
		}
	}

	newArr.sort(function(a, b){
		var ax = '',bx='';
		ax = (a[itmNr][0] !== undefined) ? a[itmNr][0].innerText : '';
		bx = (b[itmNr][0] !== undefined) ? b[itmNr][0].innerText : '';
		
		// int, foat or string
		if(parseInt(ax) == ax && parseInt(bx) == bx){
			ax = parseInt(ax);
			bx = parseInt(bx);
			return (ax < bx) ? -1 : (ax > bx) ? 1 : 0;
		}else if(parseFloat (ax) == ax && parseFloat (bx) == bx){
			ax = parseFloat(ax);
			bx = parseFloat(bx);
			return ax - bx;
		}else{
			return (ax < bx) ? -1 : (ax > bx) ? 1 : 0;
		}
	});

	if(thisTh.sortDir === 0){
		newArr.reverse();
	}
	var tbody = thisTable.getElementsByTagName('tbody');
	for(i = 0; i < newArr.length; i++){
		tbody[0].appendChild(allTr[newArr[i][0][1]]);
	}
}

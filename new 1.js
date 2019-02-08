field.addEventListener('click', getX);


function getX(event) {
	let target = event.target;
	if (target.innerHTML == '') {
		target.innerHTML = 'X';
		field.removeEventListener('click', getX);
		field.addEventListener('click', getO);
	}
	checkIt();
};

function getO(event) {
	let target = event.target;
	if (target.innerHTML == '') {
		target.innerHTML = 'O';
		field.removeEventListener('click', getO);
		field.addEventListener('click', getX);
	}
	checkIt();
};

clear.addEventListener('click', newGame);

function newGame() {
	let childs = document.getElementsByTagName('td');
	for (let i = 0; i < childs.length; i++) {
		childs[i].innerHTML = '';
		childs[i].style.backgroundColor = '';
	}
};

var rows = document.getElementsByTagName('tr');
function checkIt() {
		
	if (rows[0].children[0].innerHTML !== '' && (rows[0].children[0].innerHTML == rows[1].children[1].innerHTML) && (rows[0].children[0].innerHTML == rows[2].children[2].innerHTML))
		{
			rows[0].children[0].style.backgroundColor = 'red';
			rows[1].children[1].style.backgroundColor = 'red';
			rows[2].children[2].style.backgroundColor = 'red';
		}
 		
	else if (rows[0].children[2].innerHTML != '' && rows[0].children[2].innerHTML == rows[1].children[1].innerHTML && rows[0].children[2].innerHTML == rows[2].children[0].innerHTML)
		{
			rows[0].children[2].style.backgroundColor = 'red';
			rows[1].children[1].style.backgroundColor = 'red';
			rows[2].children[0].style.backgroundColor = 'red';
		}
	else {chekAll()}	
};

function chekAll() {	
	for (let i=0; i<3; i++) {
		let childs = rows[i].children;
		if (childs[0].innerHTML != '' && childs[0].innerHTML == childs[1].innerHTML && childs[0].innerHTML == childs[2].innerHTML) {
			for (let i=0; i<3; i++) {
				childs[i].style.backgroundColor = 'red';
			}	
		}
	}
	
	let col1 = document.getElementsByClassName('col1');
	for (let i=0; i<3; i++){
		if (col1[0].innerHTML != '' && col1[0].innerHTML == col1[1].innerHTML && col1[0].innerHTML == col1[2].innerHTML)
			{for (let i=0; i<3; i++) {
				col1[i].style.backgroundColor = 'red';
			}	
		}
	}	
	let col2 = document.getElementsByClassName('col2');
		for (let i=0; i<3; i++){
		if (col2[0].innerHTML != '' && col2[0].innerHTML == col2[1].innerHTML && col2[0].innerHTML == col2[2].innerHTML)
			{for (let i=0; i<3; i++) {
				col2[i].style.backgroundColor = 'red';
			}	
		}
	}
	let col3 = document.getElementsByClassName('col3');
		for (let i=0; i<3; i++){
		if (col3[0].innerHTML != '' && col3[0].innerHTML == col3[1].innerHTML && col3[0].innerHTML == col3[2].innerHTML)
			{for (let i=0; i<3; i++) {
				col3[i].style.backgroundColor = 'red';
			}	
		}
	}
	
};

function winner() {
	
};

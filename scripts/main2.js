let startArray = [" ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
let initArray = startArray.slice(0, startArray.length);
let arr = document.getElementsByClassName("element");

function check(){
	for(let  i = 0; i < arr.length; i++){
		if(arr.item(i).innerHTML != i){
			return;
		}
	}
	alert("You won!!!");
}

for(let i = 0; i < arr.length; i++){
	let k = Math.floor(Math.random() * initArray.length);
	arr.item(i).innerHTML = initArray.splice(k, 1)[0];

	arr.item(i).addEventListener("click", function move(e){
		let id = parseInt(e.target.id);
		
		let index = id + 1;
		let c = index % 4;
		if((c >= 0 && c<=3) && (index >=0 && index <16)){
			if(arr.item(index).innerHTML == " "){
				let t = arr.item(index).innerHTML;
				arr.item(index).innerHTML = arr.item(id).innerHTML;
				arr.item(id).innerHTML = t;
			}
		}
		index = id - 1;
		c = index % 4;
		if((c >= 0 && c<=3) && (index >=0 && index <16)){
			if(arr.item(index).innerHTML == " "){
				let t = arr.item(index).innerHTML;
				arr.item(index).innerHTML = arr.item(id).innerHTML;
				arr.item(id).innerHTML = t;
			}
		}
		index = id + 4;
		c = index % 4;
		if((c >= 0 && c<=3) && (index >=0 && index <16)){
			if(arr.item(index).innerHTML == " "){
				let t = arr.item(index).innerHTML;
				arr.item(index).innerHTML = arr.item(id).innerHTML;
				arr.item(id).innerHTML = t;
			}
		}
		index = id - 4;
		c = index % 4;
		if((c >= 0 && c<=3) && (index >=0 && index <16)){
			if(arr.item(index).innerHTML == " "){
				let t = arr.item(index).innerHTML;
				arr.item(index).innerHTML = arr.item(id).innerHTML;
				arr.item(id).innerHTML = t;
			}
		}
		
		check();
	});
}
initArray = startArray.slice(0, startArray.length);

document.getElementById("random").addEventListener("click", ()=>{
	console.log("works");
	for(let i = 0; i < arr.length; i++){
		let k = Math.floor(Math.random() * initArray.length);
		arr.item(i).innerHTML = initArray.splice(k, 1)[0];
	}
	initArray = startArray.slice(0, startArray.length);
})
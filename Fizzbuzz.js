for(var i=1;i<101;i++){
	if(i%3===0&&i%5===0){
var element = document.createElement("div");
element.innerHTML="fizzbuzz";
document.body.appendChild(element);
	console.log("fizzbuzz");
}
else if(i%3===0){
var element = document.createElement("div");
element.innerHTML="fizz";
document.body.appendChild(element);
	console.log("fizz");
}
else if(i%5===0){
var element = document.createElement("div");
element.innerHTML="buzz";
document.body.appendChild(element);
	console.log("buzz");

}else {
var element = document.createElement("div");
element.innerHTML=i;
document.body.appendChild(element);
	console.log(i);
}
	
}
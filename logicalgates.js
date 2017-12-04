function not(){
var k=document.getElementById("sonuc");
if(k.textContent=="0") k.textContent = "1";
else if(k.textContent=="1") k.textContent = "0";
}

function not1(){
var k=document.getElementById("txtbx1");
if(k.value=="0") k.value="1";
else if(k.value=="1") k.value="0";
}

function not2(){
var k=document.getElementById("txtbx2");
if(k.value=="0") k.value="1";
else if(k.value=="1") k.value="0";
}

function and(){
var a=document.getElementById("txtbx1").value;
var b=document.getElementById("txtbx2").value;
if(a!="0" && a!="1" || b!="0" && b!="1") alert("Input is invalid!");
else{
var c=document.getElementById("sonuc");
if(a=="0"||b=="0") {c.textContent="0";}
else {c.textContent="1";}
document.getElementById("btn").style="display:inline";
draw("and");
}
}

function nand(){
var a=document.getElementById("txtbx1").value;
var b=document.getElementById("txtbx2").value;
if(a!="0" && a!="1" || b!="0" && b!="1") alert("Input is invalid!");
else{
var c=document.getElementById("sonuc");
if(a=="1" && b=="1") {c.textContent="0";}
else {c.textContent="1";}
document.getElementById("btn").style="display:inline";
draw("nand");
}
}

function or(){
var d=document.getElementById("txtbx1").value;
var e=document.getElementById("txtbx2").value;
if(d!="0" && d!="1" || e!="0" && e!="1") alert("Input is invalid!");
else{
var f=document.getElementById("sonuc");
if(d=="0"&&e=="0") {f.innerHTML="0";}
else {f.innerHTML="1";}
document.getElementById("btn").style="display:inline";
draw("or");
}
}

function nor(){
var d=document.getElementById("txtbx1").value;
var e=document.getElementById("txtbx2").value;
if(d!="0" && d!="1" || e!="0" && e!="1") alert("Input is invalid!");
else{
var f=document.getElementById("sonuc");
if(d=="0"&&e=="0") {f.innerHTML="1";}
else {f.innerHTML="0";}
document.getElementById("btn").style="display:inline";
draw("nor");
}
}

function xor(){
var d=document.getElementById("txtbx1").value;
var e=document.getElementById("txtbx2").value;
if(d!="0" && d!="1" || e!="0" && e!="1") alert("Input is invalid!");
else{
var f=document.getElementById("sonuc");
if(d==e) {f.innerHTML="0";}
else {f.innerHTML="1";}
document.getElementById("btn").style="display:inline";
draw("xor");
}
}

function xnor(){
var d=document.getElementById("txtbx1").value;
var e=document.getElementById("txtbx2").value;
if(d!="0" && d!="1" || e!="0" && e!="1") alert("Input is invalid!");
else{
var f=document.getElementById("sonuc");
if(d==e) {f.innerHTML="1";}
else {f.innerHTML="0";}
document.getElementById("btn").style="display:inline";
draw("xnor");
}
}

function draw(obj){
var a = document.getElementById("txtbx1").value;
var b = document.getElementById("txtbx2").value;
var c = document.getElementById("sonuc").textContent;

if(obj=="and") {
	document.getElementById("svg_and").style="display:inline"; 
	document.getElementById("input1").textContent = a;
	document.getElementById("input2").textContent = b;
	document.getElementById("output1").textContent = c;}
else document.getElementById("svg_and").style="display:none";
if(obj=="nand") {
	document.getElementById("svg_nand").style="display:inline"; 
	document.getElementById("input3").textContent = a;
	document.getElementById("input4").textContent = b;
	document.getElementById("output2").textContent = c;}
else document.getElementById("svg_nand").style="display:none";
if(obj=="or") {
	document.getElementById("svg_or").style="display:inline"; 
	document.getElementById("input5").textContent = a;
	document.getElementById("input6").textContent = b;
	document.getElementById("output3").textContent = c;}
else document.getElementById("svg_or").style="display:none";
if(obj=="nor") {
	document.getElementById("svg_nor").style="display:inline"; 
	document.getElementById("input7").textContent = a;
	document.getElementById("input8").textContent = b;
	document.getElementById("output4").textContent = c;}
else document.getElementById("svg_nor").style="display:none";
if(obj=="xor") {
	document.getElementById("svg_xor").style="display:inline"; 
	document.getElementById("input9").textContent = a;
	document.getElementById("input10").textContent = b;
	document.getElementById("output5").textContent = c;}
else document.getElementById("svg_xor").style="display:none";
if(obj=="xnor") {
	document.getElementById("svg_xnor").style="display:inline"; 
	document.getElementById("input11").textContent = a;
	document.getElementById("input12").textContent = b;
	document.getElementById("output6").textContent = c;}
else document.getElementById("svg_xnor").style="display:none";

}
function load(form) {
var mydata = JSON.parse(data);
var test = 0;

for(var i=0;i<mydata.length;i++){
	if((form.usern.value == mydata[i].uname) && (form.pwd.value == mydata[i].age)){
	window.open("file:///home/testexam/FOSSProject/Shopping%20Cart/clothes.htm");
	test++;
	}
	
}
if (test == 0){
	alert("Incorrect Username or Password");
	}
}	


var counter=1;
setInterval(function(){
	document.getElementById('radio'+counter).checked =true;
	counter++;
	if(counter>3){
	  counter=1;
	}
},5000);


var counter2=1;
setInterval(function(){
	document.getElementById('radioo'+counter2).checked =true;
	counter2++;
	if(counter2>3){
	  counter2=1;
	}
},5000);

var counter3=1;
setInterval(function(){
	document.getElementById('radiooo'+counter3).checked =true;
	counter3++;
	if(counter3>3){
	  counter3=1;
	}
},5000);

/*start navbar*/	
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if(window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
var openmenu=document.getElementById("menu");
var btnopenmenu=document.getElementById("menubtn");
btnopenmenu.addEventListener('click',function(){
	if(openmenu.style.display=="none"){
		openmenu.style.display="block";
	}
	else{
		openmenu.style.display="none";
	}
});

openmenu.addEventListener('click',function(){
	openmenu.style.display="none";
});
/*end navbar*/

/*start about-us*/
var bttn1=document.getElementById('CLINIQ');
var bttn2=document.getElementById('PHILOSOPHY');
var bttn3=document.getElementById('TEAM');
var show1=document.getElementById('our-cliniq');
var show2=document.getElementById('our-philo');
var show3=document.getElementById('meet-our-team');
 bttn1.addEventListener('click',function(){
	show1.style.display="block";
    bttn1.style.backgroundColor="orange";	
    show2.style.display="none";
    bttn2.style.backgroundColor="white";	
    show3.style.display="none";
    bttn3.style.backgroundColor="white"; 	
},false);
 bttn2.addEventListener('click',function(){
	show1.style.display="none";
    bttn1.style.backgroundColor="white";	
    show2.style.display="block";
    bttn2.style.backgroundColor="orange";		
    show3.style.display="none";
    bttn3.style.backgroundColor="white";	
},false);
 bttn3.addEventListener('click',function(){
	show1.style.display="none";
    bttn1.style.backgroundColor="white";	
    show2.style.display="none";
    bttn2.style.backgroundColor="white";	
    show3.style.display="block";
    bttn3.style.backgroundColor="orange";
},false);
/*end about-us*/

/*start adoption*/
var questions=document.getElementsByClassName("ques");
for(var i = 0; i < questions.length; i++){
    questions[i].addEventListener('click',function(){
		if(this.lastElementChild.style.display=="block"){
		   this.lastElementChild.style.display="none";
		}
		else{
			for(var x = 0; x < questions.length; x++){
			questions[x].lastElementChild.style.display="none";
		    }
			this.lastElementChild.style.display="block";
		}
	}, false);
}

var leftarrow=document.getElementById('leftarrow');
var rightarrow=document.getElementById('rightarrow');
var petstoadopt=document.getElementById('adopt-pets');
leftarrow.addEventListener('click',function(){
	    if(petstoadopt.style.marginLeft<0+"%"){
	     petstoadopt.style.marginLeft = (parseInt((petstoadopt.style.marginLeft) || parseInt(window.getComputedStyle(petstoadopt).marginleft))) + 33.3 +"%";
		}
    },false);
rightarrow.addEventListener('click',function(){
	    if(petstoadopt.style.marginLeft<-99+"%"){
	     petstoadopt.style.marginLeft = (parseInt((petstoadopt.style.marginLeft) || parseInt(window.getComputedStyle(petstoadopt).marginLeft))) + -33.3 +"%";
		}
    },false);
/*end adoption*/
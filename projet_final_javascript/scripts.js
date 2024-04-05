function lampeFunction(){
    var lampe = document.getElementById("leteint");
    var contact = document.getElementById("ceteint")
    var myAudio = document.getElementById("switch");
   if(contact.src.indexOf("images/switchOff.png")==-1) {
    lampe.src="images/lightOff.png";
    contact.src="images/switchOff.png";
    myAudio.play();
   }
   else{
    lampe.src="images/lightOn.png";
    contact.src="images/switchOn.png";
    myAudio.play();
   }
    
}




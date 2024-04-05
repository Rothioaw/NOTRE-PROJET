
var aw=document.getElementById('rothio');
aw.addEventListener('click',function()

{
    var a=document.createElement('form');
    var b=document.createElement('form');
    var c=document.createElement('form');
    var d=document.createElement('form');
    var e=document.createElement('form');


   a.innerHTML='<label for="nom"> <b>Nom:</b></label ><input type="text"id="nom" placeholder="saisir votre nom"><br>'
   b.innerHTML='<label for="prénom"><b>Prénom :</b></label><input type="text"id="prénom"placeholder="saisir votre prénom"><br>'
   c.innerHTML='<label for=Adresse"><b>Adresse:</b></label><input type="text"id="Adresse"placeholder="saisir votre adresse"><br>'
   d.innerHTML='<label for="Email"><b>Email:</b></label><input type="text"id="email"placeholder="saisir votre email"><br>'
   e.innerHTML='<label for="Numero de Telephone"><b>Numero de Telephone:</b></label><input type="text"id="numero"placeholder="saisir votre numero"><br>'
  aw.innerHTML='form'
aw.appendChild(a);
aw.appendChild(b);
aw.appendChild(c);
aw.appendChild(d);
aw.appendChild(e);
});
var aw=document.getElementById("TBM");
aw.addEventListener("click",function(){
   var b=document.createElement('img');
  b.setAttribute('src','NOTRE PHOTO.jpg');
  b.style.width="100%"
  b.style.height="600px";
  aw.appendChild(b);
})
var aw=document.getElementById("MBT");
aw.addEventListener("click",function(){
   var video=document.createElement("video");
   video.src="2.mp4";
   video.style.width="100%"
   video.style.height="400px";
   video.controls=true;
   aw.appendChild(video);
   
})
var button=document.getElementById("BTM");
var cvContainer=document.getElementById("cvContainer");
button.addEventListener("click",function(){
var cv=document.createElement("iframe");
  cv.src="cv.pdf";
  cv.style.width="100%"
  cv.style.height="600px";
  cvContainer.innerHTML="";
  cvContainer.appendChild(cv)
  cvContainer.style.display="block";
});



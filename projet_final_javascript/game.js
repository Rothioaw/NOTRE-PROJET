  const nombreADeviner = Math.floor(Math.random() * 100) + 1;
  function verifierProposition() 
{
   const proposition = document.getElementById('proposition').value;
   const devinetteElement = document.getElementById('devinette'); 
   if 
   (proposition == nombreADeviner) 
  { 
      devinetteElement.textContent = 'Bravo ! Vous avez deviné le bon nombre !'; 
  } 
   else if 
   (proposition < nombreADeviner) 
  { 
      devinetteElement.textContent = 'Le nombre à deviner est plus grand.'; 
  }
    else 
   { 
    devinetteElement.textContent = 'Le nombre à deviner est plus petit.';
   } 
} 
    
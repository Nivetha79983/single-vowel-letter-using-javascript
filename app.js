function check(){
   let x=document.getElementById('box').value

   if(x=='a'){
    document.getElementById('result').innerHTML='a its  a vowel'
   }
   else if(x=='e'){
    document.getElementById('result').innerHTML='e its  a vowel'

   }
   else if(x=='i'){
    document.getElementById('result').innerHTML='i its  a vowel'

   }
   else if(x=='o'){
    document.getElementById('result').innerHTML='o its  a vowel'

   }
   else if(x=='u'){
    document.getElementById('result').innerHTML='u its  a vowel'

   }
   else{
    document.getElementById('result').innerHTML='its  not vowel'

   }
}
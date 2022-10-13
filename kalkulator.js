function dzialanie(znak){
  let a = document.getElementById('liczba1').value; // Pierwsza liczba
  let b = document.getElementById('liczba2').value; // Druga liczba
  let i = document.getElementById('sys').value;  // System liczbowy

  if(isNaN(a.toString(i)) || isNaN(b.toString(i)) || a == '' || b == '' || i == ''){
      document.getElementById("wynik").innerHTML = "Błąd w zapisie";
      return;
  }

  switch (znak) {
      case '+':
          document.getElementById("wynik").innerHTML = a.toUpperCase()+"<span id='wyniksys'>("+i+")</span> + "+b.toUpperCase()+"<span id='wyniksys'>("+i+")</span> = "+dodawanie(a,b,i).toUpperCase()+"<span id='wyniksys'>("+i+")</span>";
          break;
      case '-':
          document.getElementById("wynik").innerHTML = a.toUpperCase()+"<span id='wyniksys'>("+i+")</span> - "+b.toUpperCase()+"<span id='wyniksys'>("+i+")</span> = "+odejmowanie(a,b,i).toUpperCase()+"<span id='wyniksys'>("+i+")</span>";
          break;               
      case '*':
          document.getElementById("wynik").innerHTML = a.toUpperCase()+"<span id='wyniksys'>("+i+")</span> * "+b.toUpperCase()+"<span id='wyniksys'>("+i+")</span> = "+mnozenie(a,b,i).toUpperCase()+"<span id='wyniksys'>("+i+")</span>";
          break;
      case '/':
          document.getElementById("wynik").innerHTML = a.toUpperCase()+"<span id='wyniksys'>("+i+")</span> / "+b.toUpperCase()+"<span id='wyniksys'>("+i+")</span> = "+dzielenie(a,b,i).toUpperCase()+"<span id='wyniksys'>("+i+")</span>";
          break;  
  }
  
}

function dodawanie(a,b,i){
  let wynik = parseInt(a,i) + parseInt(b,i);
  let wwynik = wynik.toString(i);
  return wwynik;
}

function odejmowanie(a,b,i){
  let wynik = parseInt(a,i) - parseInt(b,i);
  let wwynik = wynik.toString(i);
  return wwynik;
}

function dzielenie(a,b,i){
  let wynik = parseInt(a,i) / parseInt(b,i);
  let wwynik = wynik.toString(i);
  return wwynik;
}

function mnozenie(a,b,i){
  let wynik = parseInt(a,i) * parseInt(b,i);
  let wwynik = wynik.toString(i);
  return wwynik;
}

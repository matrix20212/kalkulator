let a = 6254; // Pierwsza liczba
let b = 5643; // Druga liczba
let i = 7;  // System liczbowy

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

console.log(dzielenie(a,b,i));




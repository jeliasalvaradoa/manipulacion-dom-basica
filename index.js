const h1= document.getElementById('titulo');
const h2= document.querySelector('h2');
h1.innerText= "Hola Mundo";
h2.innerText= "Funciona";

const n1=document.querySelector('#numero1');
const n2=document.querySelector('#numero2');
const btn = document.querySelector('#calcularSuma');
const resultado=document.querySelector('#result');
btn.addEventListener('click',sumar);
function sumar(){

    const calculoSuma=Number(n1.value) + Number(n2.value);
    resultado.innerText= "La suma es: " + calculoSuma;
    
}
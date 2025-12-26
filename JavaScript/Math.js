/*
Math --> Matematica
    -pow (2,2) / potencia / 2² = 4 / power
    -sqrt (25,2) /raiz / v25
    - Pi
    - ceil / teto --> arredondar pra cima 
    - floor / chao --> arredondar pra baixo

    -random() / numero aleatorio entre 0 e 1

*/
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
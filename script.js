const array = [];
const secretArray = 'mario'
const elemento = document.getElementById('elemento');
elemento.classList.add("white");


window.addEventListener('keyup', (e) => {
    console.log(e.key);
    array.push(e.key);

    array.splice(-secretArray.length - 1, array.length - secretArray.length);
    if (array.join('').includes(secretArray)) {
        console.log("Ohh! you have pressed secret key sequence");
        const elemento = document.getElementById('elemento');
        elemento.classList.remove("white");
        elemento.classList.add("newColor");
       
    }
    //this make our array a string
    // if it includes annie then console.log("You have pressed secret key")
    console.log(array);
}); 
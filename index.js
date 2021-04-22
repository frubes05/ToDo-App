let kontenjer = document.querySelector("#ispisani");
let submit = document.querySelector("#submit");
let clearList = document.querySelector("#clearList");


//Dodaj element

submit.addEventListener("click", dodajElement);



function dodajElement(e) {

  let kontenjer_glavni = document.createElement("li");
  kontenjer_glavni.setAttribute("id", "text");
  kontenjer_glavni.setAttribute("class", "tekst");
  kontenjer_glavni.style.margin = "2% 0";

  let unos = document.querySelector("#unos").value;

  let poravnanje = document.createElement("span");
  poravnanje.setAttribute("id", "poravnanje");

  if (unos === "") {

    alert("Input some text!");

  } else {

    let para = document.createElement("p");
    para.innerHTML = `${unos}`;
    para.setAttribute("class", "precrtaj");
    para.classList.add("ravno");
    poravnanje.appendChild(para);

    let first_button = document.createElement("button");
    first_button.innerText = "X"
    first_button.setAttribute("class", "obrisi");
    first_button.classList.add("ravno");
    poravnanje.appendChild(first_button);

    let second_button = document.createElement("button");
    second_button.innerText = "Done";
    second_button.setAttribute("class", "prekrizi");
    second_button.classList.add("ravno");
    poravnanje.appendChild(second_button);



    kontenjer_glavni.appendChild(poravnanje);

    kontenjer.appendChild(kontenjer_glavni);

    unos = document.querySelector("#unos").value = "";

    e.preventDefault();
  }


}


//Izbriši element

document.body.addEventListener("click", izbrisiElement);



function izbrisiElement(e) {

  if (e.target.classList.contains('obrisi')) {

    e.target.parentElement.parentElement.remove();

  }


  e.preventDefault();
}


//Izbriši sve

clearList.addEventListener("click", izbrisiSve);


function izbrisiSve() {

  kontenjer.innerHTML = "";

}





//Dodaj 1 element


document.body.addEventListener("click", precrtajElement);



function precrtajElement(e) {

  let tekst = e.target.parentElement.firstChild;

  if (e.target.classList.contains('prekrizi')) {



    tekst.style.textDecoration = "line-through";

    let undone = document.createElement("button");
    undone.innerHTML = "Undone";
    undone.setAttribute("class", "odcrtaj");
    tekst = e.target.parentElement;
    tekst.style.gridTemplateColumns = "150px 20px 50px 50px";
    tekst.appendChild(undone);

    let button = e.target;
    button.disabled = true;



    e.target.removeAttribute('onemoguci');
    e.target.setAttribute("class", 'prekrizi');

    e.preventDefault();
  }

}

// Precrtaj po želji

document.body.addEventListener("click", precrtajPoZeljiElement);



function precrtajPoZeljiElement(e) {

  let tekst = e.target.parentElement.firstChild;

  if (e.target.classList.contains('onemoguci')) {


    tekst.style.textDecoration = "line-through";


    let button = e.target;
    button.disabled = true;

    let button3=e.target.nextElementSibling;
    button.disabled = false;

    button3.removeAttribute('odcrtaj');
    button3.setAttribute("class", 'onemoguci');

    e.preventDefault();
  }

}






//Odcrtaj željeni element


document.body.addEventListener("click", odcrtajElement);


function odcrtajElement(e) {


  let tekst = e.target.parentElement.firstChild;

  if (e.target.classList.contains('odcrtaj')) {


    tekst.style.textDecoration = "none";


    let button = e.target;
    button.disabled=true;



    button.removeAttribute("odcrtaj")
    button.setAttribute("class", 'prekrizi');


    let button1 = e.target.previousElementSibling;
    button1.disabled=false;

    button1.setAttribute("class","prekrizi");
    button1.nextElementSibling.remove();

    e.preventDefault();

  }
}

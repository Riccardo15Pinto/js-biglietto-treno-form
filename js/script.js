console.log('ok js')

const elementnameUser = document.getElementById("name-user");

const elementageUser = document.getElementById("age-user");

const elementdistanceUser = document.getElementById("distance-user");

const btn = document.getElementById("btn");

const btnCancel = document.getElementById("btn-cancel");

let totalprice;

const client = document.getElementById("client");

const ticket = document.getElementById("ticket");

const cabin = document.getElementById("cabin");

const numberCP = document.getElementById("number-cp");

const priceTicket = document.getElementById("price-ticket");

const show = document.getElementById("card-hidden");

const maxs = 9999;

const max = 10;

const min = 1;

const random = Math.random();

const cabinNumber = Math.floor(random*(max + 1 - min)) + min;

const CPnumber = Math.floor(random * (maxs + 1 - min)) + min;

btn.addEventListener("click", function(){
    const nameUser = elementnameUser.value;
    console.log(nameUser);
    const distanceUser = parseInt(elementdistanceUser.value);
    console.log(distanceUser);
    const ageUser = elementageUser.value;
    console.log(ageUser);
    const price = (distanceUser * 0.21).toFixed(2);
    console.log(price);
    
    let discount20 = ((20 / 100) * price);
    
    let discount40 = ((40 / 100) * price);
    
    if(ageUser === "1"){
        totalprice = price + " €";
        ticket.innerText = "Biglietto Standard";
    }else if (ageUser === "2"){
        totalprice = (price - discount20).toFixed(2) + " €";
        ticket.innerText = "Biglietto Scontato Under 18";   
    }else if (ageUser === "3"){
        totalprice = (price - discount40).toFixed(2) + " €";
        ticket.innerText = "Biglietto Scontato Over 65";
    }
    console.log(totalprice);
    
    client.innerText = nameUser;
    
    priceTicket.innerText = totalprice;

    show.classList.remove('d-none');

    cabin.innerText = cabinNumber;

    numberCP.innerText = CPnumber;
});

btnCancel.addEventListener("click", function(){
    show.classList.add('d-none');
    elementnameUser.value = '';
    elementdistanceUser.value = '';
})


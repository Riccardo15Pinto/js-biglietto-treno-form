console.log('ok js')

const elementnameUser = document.getElementById("name-user");

const elementageUser = document.getElementById("age-user");

const elementdistanceUser = document.getElementById("distance-user");

const btn = document.getElementById("btn");

let totalprice;

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

    if(ageUser === "2"){
       totalprice = (price - discount20).toFixed(2);
    } else if (ageUser === "3"){
        totalprice = (price - discount40).toFixed(2);
    }

    console.log(totalprice);
});




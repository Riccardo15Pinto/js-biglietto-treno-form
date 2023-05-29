console.log('ok js')

const elementnameUser = document.getElementById("name-user");

const elementageUser = document.getElementById("age-user");

const elementdistanceUser = document.getElementById("distance-user");

const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    const nameUser = elementnameUser.value;
    console.log(nameUser);
    const distanceUser = parseInt(elementdistanceUser.value);
    console.log(distanceUser);
    const ageUser = elementageUser.value;
    console.log(ageUser);
});




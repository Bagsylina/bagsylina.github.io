function kickout(){
    alert("You took too long filling out this form!");
    window.location.replace("CatAuction.html");
}

function getData(){
    var catname = document.getElementById("catname").value;
    var species = document.getElementById("species").value;
    var breed = document.getElementById("breed").value;
    var fur = document.getElementById("fur").value;
    var description = document.getElementById("description").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var age = 0;
    if(document.getElementById("baby").checked)
        age = 1;
    else if(document.getElementById("young").checked)
        age = 2;
    else if(document.getElementById("adult").checked)
        age = 3;
    else if(document.getElementById("old").checked)
        age = 4;
    var ownername = document.getElementById("ownername").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var colour = document.getElementById("colour").value;

    var nr = Number(localStorage.getItem("nr_entries"));
    nr += 1;
    localStorage.setItem("nr_entries", nr);

    var entry = {"catname": catname, "species": species, "breed": breed, "fur": fur, "description": description,
            "height": height, "weight": weight, "age": age, "ownername": ownername, "email": email, "phone": phone, "colour": colour, "likes": 0};
    localStorage.setItem("entry" + nr, JSON.stringify(entry));
    localStorage.setItem("entryphoto" + nr, imgData);
}

window.onload = function(){
    document.getElementById("photo").addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
    // convert file to base64 String
    imgData = reader.result.replace('data:', '').replace(/^.+,/, '');
    //imgData = base64String;
    };
    reader.readAsDataURL(file);
    });
    const Timeout = setTimeout(kickout, 120000);
    //document.getElementById("submitbutton").addEventListener("click", getData, false);
}
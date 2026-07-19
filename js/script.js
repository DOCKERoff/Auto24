const scriptURL = "https://script.google.com/macros/s/AKfycbx2Kor0HQ0sDIj7dssSAi_p1cUdZrbBYamfCiyRQXXCKl4WlaqvPee-zik-wh-a_04/exec";


const form = document.querySelector("form");


form.addEventListener("submit", e => {


e.preventDefault();



let data = {


name:
form.querySelectorAll("input")[0].value,


phone:
form.querySelectorAll("input")[1].value,


brand:
form.querySelectorAll("input")[2].value,


model:
form.querySelectorAll("input")[3].value,


service:
form.querySelector("select").value,


date:
form.querySelectorAll("input")[4].value,


time:
form.querySelectorAll("input")[5].value


};



fetch(scriptURL, {

method:"POST",

body:JSON.stringify(data)

})


.then(()=>{


alert(
"✅ Заявка отправлена! Мы свяжемся с вами."
);


form.reset();


})


.catch(()=>{


alert(
"Ошибка отправки"
);


});


});
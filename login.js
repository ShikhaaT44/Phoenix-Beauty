let name=localStorage.getItem('name')?localStorage.getItem('name'):''
console.log(name);

function saveData()
{
let email,psw;
email=document.getElementById("email").value;

psw=document.getElementById("psw").value;

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{return v.email==email && v.psw==psw}))
{
let current_user=user_records.filter((v)=>{return v.email==email && v.psw==psw})[0]
localStorage.setItem('name',current_user.name);
localStorage.setItem('email',current_user.email);
window.location.href="phoenixbeautyfinal.html"
}
else
{
alert('Wrong email or password.');
document.getElementById("email").focus();
return false;
}

}
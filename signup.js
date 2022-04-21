function saveData()
{
let name,email,psw;
name=document.getElementById("name").value;
email=document.getElementById("email").value;
psw=document.getElementById("psw").value;
psd=document.getElementById("psd").value;

var flag=0;
var patt_name=/^[A-z]+$/;

		if(!name.match(patt_name))
		{
      alert("Enter valid Name !!!!");
      flag = 1;
      document.getElementById("name").focus();
		}

regex = /^[a-zA-Z0-9\.\_\-]+@[a-zA-z]+\.[a-zA-z]+$/;

if(regex.test(document.getElementById("email").value) == false)
{
  alert("Invalid Email !!!! Enter valid E-mail_Id");
  flag = 1;
  document.getElementById("email").focus()
}

if((!psw.match(/[a-z]/)) || (!psw.match(/[A-Z]/)) || (!psw.match(/[0-9]/)) || (psw.length<6))
{
	alert("Invalid Password !!!! Enter valid Password");
  alert("Password must contain at least 6 characters, 1 capital letter, 1 digit");
  flag = 1;
  document.getElementById("psw").focus()
}
if(psw!=psd)
{
alert("Password and re-password must be same");
flag = 1;
document.getElementById("psw").focus()
}

if(flag ===0)
{
		alert("The Form has Submitted")
    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records.some((v)=>{return v.email==email}))
    {
        alert("duplicate data");
    }
    else
    {
      user_records.push({
      "name":name,
      "email":email,
      "psw":psw
      })
      localStorage.setItem("users",JSON.stringify(user_records));
    }
    window.location.href="phoenixbeautyfinal.html";
}

}
function chektext(obj)
{
    let data=obj.value;
    var cheakname=/^[a-zA-Z ]+$/;
    if(cheakname.text()==="fales")
    alert("please enter correct name");
}

function cheknumber(obj)
{
    let data=obj.value;
    data=parseInt(data);
    if(!Number.isInteger(data))
   {
       alert("please enter the correct age");
       obj.value="";
       obj.setFocus=true;
   }
}
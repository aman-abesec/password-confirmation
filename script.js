function main(){
  let a=document.getElementById('password').value;
  let b=document.getElementById('conformpassword').value;
  if(a!='' && b!=''){
    if(a==b){
      document.getElementById('warning').textContent="Password Match";
      document.getElementById('warning').style.backgroundColor="#3ae374";
    }
    else{
      document.getElementById('warning').innerHTML="Password Not Match";
      document.getElementById('warning').style.backgroundColor="#ff4d4d";
    }
  }
  else{
    document.getElementById('warning').innerHTML="Password can't be empty";
    document.getElementById('warning').style.backgroundColor="yellow";
  }
}

function fn(){
  document.getElementById('warning').innerHTML="";
  document.getElementById('warning').style.backgroundColor="#fff";
}

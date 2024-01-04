
        

function savings(){
    hlogkey=localStorage.getItem('loginkey');
   huserdetails=JSON.parse(localStorage.getItem(hlogkey));
   username.innerHTML=`Welcome ${huserdetails.NAME}` ;

    des=description.value;
    sal=salary.value;
    const valuetable=income;
    let key=localStorage.getItem('loginkey');
    userdetails=JSON.parse(localStorage.getItem(key));
    console.log(sal,des);
    userdetails.balance += +sal;
    localStorage.setItem(key,JSON.stringify(userdetails));
    result.innerHTML=`<h2 class="text-center">${userdetails.balance}</h2>`


    const newRow=valuetable.querySelector("tbody").insertRow();
    const cell1=newRow.insertCell(0);
    const cell2=newRow.insertCell(1);
    const cell3=newRow.insertCell(2);

    cell1.innerHTML=des;
    cell2.innerHTML=sal;
    cell3.innerHTML=userdetails.balance;
}

function expense(){
    edes=edescription.value;
    esal=esalary.value;
    valtable=expenses;
    
    let ekey=localStorage.getItem('loginkey');
    euserdetails=JSON.parse(localStorage.getItem(ekey));
    console.log(edes,esal);
    euserdetails.balance -= +esal;
    localStorage.setItem(ekey,JSON.stringify(euserdetails));
    result.innerHTML=`<h2 class="text-center">${euserdetails.balance}</h2>`;

    const enewRow=valtable.querySelector("tbody").insertRow();
    const ecell1=enewRow.insertCell(0);
    const ecell2=enewRow.insertCell(1);
    const ecell3=enewRow.insertCell(2);

    ecell1.innerHTML=edes;
    ecell2.innerHTML=esal;
    ecell3.innerHTML=euserdetails.balance;

}

function logout(){
    window.location='./index.html';
    localStorage.clear()
}
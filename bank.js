//register

function register(){
    const bank={
        uname:uname.value,
        acno:acno.value,
        pswd:pswd.value,
        balance:0
    }
    if(bank.uname==""||bank.acno==""||bank.pswd==""){
alert('fill all Datas')
    }
    else{
        if(bank.acno in localStorage){
            alert('account already existed')
        }
        else{
            localStorage.setItem(bank.acno,JSON.stringify(bank))
            alert('new account created sucessfully')
            window.location="./index2.html"
        }
    }

}

//login

function signin(){
    let acno=document.getElementById('acno').value
    let pswd=document.getElementById('pswd').value
    if(acno==""||pswd==""){
        alert('enter all details')
    }
    else{
        if(acno in localStorage){
            let bankk=JSON.parse(localStorage.getItem(acno))
            if(pswd==bankk.pswd){
                localStorage.setItem('login',JSON.stringify(bankk))
                alert('login sucessful')

                window.location="./index1.html"
            }
            else{
                alert('incorrect password')
            }
        }
        else{
            alert('account does not found. register new account')
            window.location="./index3.html"
        }
    }
}

//deposit and withdraw

function deposit(){
    amount=amt.value;
    amount=Math.floor(amount);
    pswd=deposit_pswd.value;
    let Acc = JSON.parse(localStorage.getItem(pswd));
    if(amount == ""||pswd==""){
        alert("please fill the details");
    }
    else{
        if(pswd in localStorage){
            if(pswd==Acc.pswd){
                Acc.balance+=amount;
                deposit_balance.innerHTML =`<p class="text-success ">Deposit Successful , <span class="text-secondary">Current Balance Is : ₹${Acc.balance}</span></p>`;
                localStorage.setItem(Acc.pswd,JSON.stringify(Acc))
            }
        }
        else{
            alert("incorrect password")
        }
    }
}

//withdraw

function widh(){
    amount = widh_amt.value;
    amount=Math.floor(amount)
    pswd=widh_pswd.value

    if(amount=="" ||pswd.value==""){
alert('fill all details')
    }
    else{
        if(pswd in localStorage){
            let Acc= JSON.parse(localStorage.getItem(pswd))
            if(pswd==Acc.pswd){
                if(Acc.balance> amount){
                    Acc.balance -= amount;
                    widh_balance.innerHTML = `<p class="text-success mx-5 mt-3">Withdraw Successfull ,<span class="text-secondary"> Current Balance Is : ₹ ${Acc.balance}</span></p>`;
                    localStorage.setItem(Acc.pswd,JSON.stringify(Acc))
                }
                else{

                }
            }
        }
        else{
            alert("incorrect password")
        }
    }

}

//log out
function logout() {
    localStorage.clear()
    window.location="./index.html"
}


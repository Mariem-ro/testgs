
function testGS(){
    const url="https://script.google.com/macros/s/AKfycbzvTyHJsz-xCeosO2lRq2K2lqAFfcJear3704qAqxY-lT8kEFW5/exec";
fetch(url)
.then(d => d.json())
.then(d => {
    document.getElementById("app").textContent = d[0].status;

});}

function addGS(){
    const url="https://script.google.com/macros/s/AKfycbzvTyHJsz-xCeosO2lRq2K2lqAFfcJear3704qAqxY-lT8kEFW5/exec";
fetch(url,{
    method: 'POST',
    mode: 'no-cors',
    cache: 'no-cache',
    //credentials:'omit',
    headers: {
        'Content-Type':'application/json'

   },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({name:"olivia"})
})

;}
document.getElementById("btn2").addEventListener("click",addGS);
document.getElementById("btn").addEventListener("click",testGS);

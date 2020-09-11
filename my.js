
function testGS(){
    const url="https://script.google.com/macros/s/AKfycbzvTyHJsz-xCeosO2lRq2K2lqAFfcJear3704qAqxY-lT8kEFW5/exec";
fetch(url)
.then(d => d.json())
.then(d => {
    document.getElementById("app").textContent = d[0].status;

});}
document.getElementById("btn").addEventListener("click",testGS);

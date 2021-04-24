// update function 
// This function update test from one textarea to another
function updateText(){
    let firsttext=document.getElementById('text-input').value;
    let secondtext=document.getElementById("text-output").innerText=firsttext;
}
updateText();

// makeBold function
function makeBold(elem){
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('bold');
    //console.log(elem);

}
//makeItalic function
function makeItalic(elem){
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('italic');
}
//makeUnderline function
function makeUnderline(elem){
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('underline');
}
//makeTextAlign function
function makeTextAlign(elem,alignType){
    elem.classList.toggle('active');
    document.getElementById('text-output').style.textAlign=alignType;
    console.log(alignType);

}

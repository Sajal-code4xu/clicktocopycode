<script>

function myfun(z){
var y = z;
const timer = setTimeout(hidecopy,                   3000,y);
document.getElementById(z).innerHTML="copied!";
}

function hidecopy(y){
document.getElementById(y).innerHTML="";
clearTimeout(timer);
}

function copyFunction(x) {
const copyText = document.getElementById(x).textContent;
const textArea = document.createElement('textarea');
textArea.textContent = copyText;
document.body.append(textArea);
textArea.select();
document.execCommand("copy");
textArea.remove();
}

</script>


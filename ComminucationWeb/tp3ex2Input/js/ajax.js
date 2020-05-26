function ajaxRequest(type,url,callback){
    let xhr = new XMLHttpRequest();
xhr.open(type,url);

xhr.onload=() =>{
switch (xhr.status)
{
    case 200:
    case 201: console.log(xhr.responseText);
        console.log(JSON.parse(xhr.responseText));
        callback(JSON.parse(xhr.responseText));

break;

}
};

xhr.send();
}
function display(texte){
    document.getElementById("title").innerHTML = texte[0];
    document.getElementById("detail").innerHTML = "hours : "+texte[1]["hours"]+"<br> minutes : "+texte[1]["minutes"]+"<br> seconds : "+texte[1]["seconds"];
    displayClock(texte);
}

setInterval(ajaxRequest,1000,'GET','php/time.php',display);

//ajaxRequest('GET','php/time.php',display);
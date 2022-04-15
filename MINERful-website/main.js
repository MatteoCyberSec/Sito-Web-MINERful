//opens a link in a new tab
function apriSchedaNuova() 
{ 
    window.open("https://github.com/cdc08x/MINERful", "_blank"); 
} 



//read file
function readFile(name,div) 
{
    //create object
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() 
    {
        //check status 
        if (this.readyState == 4 && this.status == 200) 
        {
            //where I see the read text
            document.getElementById(div).innerHTML = xhttp.responseText;
        }
    };

    //specific path
    var path = "../../Code/" + name;


    //read and open the file
    xhttp.open("GET", path , true);
    
    //send result
    xhttp.send();

    
}

//copy text
function copy(text) 
{
    //create a dummy input
    var aux = document.createElement("input");

    //set value attribute with the text field I want to copy
    aux.setAttribute("value", document.getElementById(text).innerHTML);

    //append the dummy input to the body
    document.body.appendChild(aux);

    //apply the select
    aux.select();

    //apply the copy function even if deprecated
    document.execCommand("copy");

    //remove dummy input from the body
    document.body.removeChild(aux);
}
 
//shows in slow mode the container given id in input 
function showBox(name) 
{
    name = "#" + name ;
    
    $(name).show("slow");
} 

//prevent spam from bots
function noSpam()
{
    //words list
    var parole = ["gmail", "di", "com", "ciccio", "&#46;", "&#64;", "uniroma1", "it"];
              
    //costruction email
    var email = parole[1] + parole[3] + parole[5] + parole[1] + parole[4] + parole[6] + parole[4] + parole[7];
                  
    //show email
    document.getElementById("email").innerHTML=email;
}
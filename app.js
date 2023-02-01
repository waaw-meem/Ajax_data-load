// Ajax

function loadData(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById('demo').innerHTML = this.responseText;
        }else if(this.readyState == 4 && this.status == 404){
            document.getElementById('demo').innerHTML = this.responseText;
        }
    }

    // we can use url instead of file path as well 
    xhttp.open('GET','./content/readme.txt',true)
    xhttp.send()
}
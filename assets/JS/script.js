    let xhr = new XMLHttpRequest;

    xhr.open('GET', 'https://thatsthespir.it/api', true)

    xhr.onload = function() 
        {
            if (this.status === 200) {

                var qString = JSON.parse(this.responseText);
                var qAut = qString.author;
                var quo = qString.quote;
                var picture = qString.photo;

                document.getElementById("autPic").setAttribute("src",picture);
                document.getElementById("quote").innerHTML = quo +"<br>"+qAut;
                console.log(qString);
                    
            } else {
                alert("Error!")
            }
                }
    xhr.send();
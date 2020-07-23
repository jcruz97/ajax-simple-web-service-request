    let xhr = new XMLHttpRequest;

    xhr.open('GET', 'https://thatsthespir.it/api', true)

    xhr.onload = function() 
        {
            if (this.status === 200) {

                var qString = JSON.parse(this.responseText);
                var allQuote = qString.author+ qString.quote;
                document.getElementById("quote").innerHTML = allQuote;
                
                console.log(qString);
                    
            } else {
                alert("Error!")
            }
                }
    xhr.send();
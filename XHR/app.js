document.getElementById('button').addEventListener('click', loadData);

function loadData(){

    //create an XHR object
    const xhr = new XMLHttpRequest();

    //OPEN
    xhr.open('GET', 'data.txt', true);

    // console.log('READYSTATE', xhr.readyState);

    //optional - used for spinners / loaders
    xhr.onprogress = function(){
        console.log('READYSTATE', xhr.readyState);
    }

    xhr.onload = function(){
        console.log('READYSTATE', xhr.readyState);
       if(this.status === 200 ){

        //  console.log(this.responseText);

            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;

       }
    }

    // xhr.onreadystatechange = function(){
    //     console.log('READYSTATE', xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     } 
    // }

    xhr.onerror = function(){
        console.log('Request error...');
    }

    xhr.send();




    // readyState values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: procesing request
    // 4: request finished and response is ready

    // HTTP status
    // 200: "ok"
    // 403: "forbidden"
    // 404: "not found"

}


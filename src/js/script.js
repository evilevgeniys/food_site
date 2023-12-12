'use strict'

window.addEventListener('DOMContentLoaded', () => {

     //Fetch API lesson

     fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({name: 'Alex'}),
        headers: {
            'Content-type': 'application/json'
        }
     })
      .then(response => response.json())
      .then(json => console.log(json))

     //JSON-server lesson
     
     fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));
     
})
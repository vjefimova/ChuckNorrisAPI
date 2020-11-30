document.querySelector(".get-jokes").addEventListener('click', getJokes);

function getJokes(event){
    const number = document.querySelector('input[type="number"]').value;
    console.log(number);

    let url = `http://api.icndb.com/jokes/random/${number}`;
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then(data => {
        console.log(data)
        let output = '';
        data.value.forEach(value => {
            output+=`<li>${value.joke}</li>`;
        });
        document.querySelector('.jokes').innerHTML = output;
    })
    .catch(error=>{
        console.log(error);
    })

    event.preventDefault();
}
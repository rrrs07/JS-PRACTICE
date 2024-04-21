let obj = {
    heading:"head"
};

async function utility(){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let output = await response.json();
    console.log(output);
}

utility();
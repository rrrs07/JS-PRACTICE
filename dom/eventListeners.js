// let myDiv = document.createElement('div');

// for (let i = 0; i <=100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is paragraph number ' + i;

//     newElement.addEventListener('click', function(e) {
//         console.log('I have clicked on para');
//     });
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);



// this will log only when clicked on span and not in paragraph
let element = document.querySelector('#wrapper');
element.addEventListener('click', function(e) {
    if(e.target.nodeName === 'SPAN') {
    console.log('clicked on span' + e.target.textContent);
    }
});

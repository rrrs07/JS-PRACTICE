// innerHTML ---    get an element  , set an element's html content


// innerText --- get an element  , set an element's text content

// textContent --- get an element  , set an element's text content
// outerHTML --- 

// difference b/w innerHTML and textContent
// if we define a bold tag to an text then innerHTML returns the HTML content of an element whereas textContent will return the tag as well as the text content of an element 

// differnece b/w innerText and textContent
// innerText returns the text content of an element and does not show the text having display hidden property whereas textContent returns the text content of an element as well as the text content of its descendants

// adding new elements to the DOM(this create it at the end of the element)
let content = document.querySelector('.content');
let newElement = document.createElement('p');
content.appendChild(newElement);
// adding text to the new element
let myPara = document.createElement('p');
myPara.textContent = 'I am a new paragraph';
content.appendChild(myPara);

// adding new elements to the DOM(this create it at our desired location of the element)
let content1 = $0;
let newText = document.createElement('p');
let textToAdd = '<p> I am a new paragraph</p>';
content1.insertAdjacentElement('beforeBegin', newText);//afterBegin, beforeEnd, afterEnd

// removing elements from the DOM
parent.removeChild(child);


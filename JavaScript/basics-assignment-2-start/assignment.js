const task3Element = document.getElementById('task-3');

function greet(){

    alert('Hello, welcome to the JavaScript assignment!');
}

function greetUser(name) {
    alert(`Hello, ${name}! Welcome to the JavaScript assignment!`);
}
// greet();
greetUser('John');

function combined(a,b,c){
    const combinedtext = a + b + c;
    return combinedtext;
}

task3Element.addEventListener('click', greet);


const combinedString = combined('Hello, ', 'this is ', 'a combined string!');

alert(combinedString);
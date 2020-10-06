var cells = document.getElementsByClassName("date")
var input = document.getElementById("cal-input")
var color = document.getElementById("cal-color")
var button = document.getElementById("cal-button")
input.value = ''
color.value = '#b0b0b0'

var dateButton = document.getElementsByClassName('date');
for(var i=0; i<dateButton.length; ++i) {
    dateButton[i].style.color = '#000000';
}

//Sets the page's theme. No need to modify
var themeButton = document.getElementsByClassName("ChooseTheme")
for(var i=0; i<themeButton.length; ++i) {
    themeButton[i].addEventListener('click', e => {
        document.body.setAttribute('class', e.target.id)
    }, false)
}

[].forEach.call(document.getElementsByClassName('date'), function(item) { 
    item.addEventListener('click', function() {
        var dateButton = document.getElementsByClassName('date');
        for(var i=0; i<dateButton.length; ++i) {
            dateButton[i].style.backgroundColor = '#FFFFFF';
            if (dateButton[i].style.color == 'rgb(255, 255, 255)'){
                dateButton[i].style.color = '#000000';
            }
        }
        item.style.backgroundColor = '#000000';
        if (item.style.color == 'rgb(0, 0, 0)'){
            item.style.color = '#FFFFFF';
        }
    }, false); 
})

function readinput() {
    var dateButton = document.getElementsByClassName('date');
    for(var i=0; i<dateButton.length; ++i) {
        if (dateButton[i].style.backgroundColor == 'rgb(0, 0, 0)' && document.getElementById("cal-input").value !== '') {
            dateButton[i].innerHTML += '<br>';
            dateButton[i].innerHTML += document.getElementById("cal-input").value;
            input.value = '';
            dateButton[i].style.color = document.getElementById("cal-color").value;
            break;
        }
    }
}

document.body.addEventListener('keyup', event => {
    if(event.key == 'Enter' && event.target.value !== ''){
        var dateButton = document.getElementsByClassName('date');
        for(var i=0; i<dateButton.length; ++i) {
            if (dateButton[i].style.backgroundColor == 'rgb(0, 0, 0)' && document.getElementById("cal-input").value !== '') {
                dateButton[i].innerHTML += '<br>';
                dateButton[i].innerHTML += document.getElementById("cal-input").value;
                input.value = '';
                dateButton[i].style.color = document.getElementById("cal-color").value;
                break;
            }
        }
    }
});

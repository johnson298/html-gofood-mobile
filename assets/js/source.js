const upButtons = document.querySelectorAll('.up-button');
const downButtons = document.querySelectorAll('.down-button');

upButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        let input = this.nextElementSibling;
        input.value = parseInt(input.value) + 1;
    });
});

downButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        let input = this.previousElementSibling;
        if(parseInt(input.value) > 0){
            input.value = parseInt(input.value) - 1;
        }
    });
});
const numberInputs = document.querySelectorAll('.number-input');

numberInputs.forEach(function(input) {
    input.addEventListener('change', function() {
        if (parseInt(this.value) < 0) {
            this.value = 0;
        }
    });
});

let string = "";
let memory = 0;  // Memory storage for M+ and M-

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            // Evaluate the string and update the input
            try {
                string = eval(string);
                document.querySelector('input').value = string;
            } catch (error) {
                document.querySelector('input').value = "Error";
                string = "";
            }
        } 
        else if (e.target.innerHTML === 'C') {
            // Clear the input and reset string
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === '%') {
            // Calculate percentage: (current value * percentage / 100)
            string = eval(string) / 100;
            document.querySelector('input').value = string;
        } 
        else if (e.target.innerHTML === 'M+') {
            // Add current value to memory
            memory += parseFloat(string);
            string = "";
            document.querySelector('input').value = string;
        } 
        else if (e.target.innerHTML === 'M-') {
            // Subtract current value from memory
            memory -= parseFloat(string);
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === 'MR') {
            // Recall memory
            string = memory.toString();
            document.querySelector('input').value = string;
        } 
        else {
            // Concatenate the value to string for regular operations
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});

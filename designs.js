// Select color input
const theColorPicker = document.querySelector('#colorPicker');

// Select size input
const form = document.querySelector('#sizePicker');
const submitInput = form.querySelector('input[type ="submit"]');

/*
* @description gets input data from the form, pass the input values to 
function makeGrid
* @param event
*/
function getDataForm(eve) {
    
    eve.preventDefault();

    //get value from the input and assign to inputHgt
    let inputHgt = form.querySelector('#inputHeight')
        .value;
    //get value from the input and assign to inputWth
    let inputWth = form.querySelector('#inputWidth')
        .value;
    // When size is submitted by the user, call makeGrid()
    makeGrid(inputHgt, inputWth);//calling the function to create grid

}

/*
@description Checks if DOM is ready, then listens for submit click event. 
when submit button is clicked getDataform is fired.
@param click
@param {function} getDataForm
@param false Says to go with bubbling event
*/
document.addEventListener('DOMContentLoaded', function() {
    submitInput.addEventListener('click', getDataForm, false);
}, false)


/*
* @description Creates the table structure with the user 
specified numbers and changes the background color of the
 cells on click event.
* @param {number} height
* @param {number} weight
*/
function makeGrid(height, width) {
    // getting the table element and assigning it to 'tbl'.
    const tbl = document.getElementsByTagName('table')[0];

    /*Checking for any previous table, if there is a table
    element with child then we are removing it*/
    while (tbl.hasChildNodes()) {
        tbl.removeChild(tbl.firstChild)
    }

    /* Table creation. We are using for loop to iterate
    based on the input number choosen by the user */
    for (let j = 0; j < height; j++) {
        // table row creation
        let row = tbl.insertRow(j);

        for (let i = 0; i < width; i++) {
            //cell creation in a row
            let cell = row.insertCell(i);
            //Changing the background color when cell is clicked.
            cell.addEventListener('click', function(eve) {
                eve.preventDefault();
                cell.style.backgroundColor = theColorPicker.value;
            });

        }
    }
}
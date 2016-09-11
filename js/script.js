var cells = [];
var size = 4; //3x3 board
var running = true;
var is_current_player_is_x = true;
$(document).ready(function () {
    generate(size);
    display();
});
$(window).on('resize', update_size);

function update_size() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].width($(window).width() / size - 20);
        cells[i].height($(window).width() / size - 20);
    }
}

function generate(size) {
    cells = [];
    for (var i = 0; i < size * size; i++) {
        cells.push(new Cell(size, i));
    }
}

function display() {
    for (var i = 0; i < cells.length; i++) {
        $('body').append(cells[i]);
    }
}

function check(cells, size){
    //looking for winner
    //returns 'x', 'o' or undefined

    //check row for x
    var x_in_row = 0;
    for(var i = 0;i<size;i++){ // i - number of row
        for(var j = 0;j<size;j++){ //i*size+j - index of current cell
            if(cells[i*size+j].value == 'x'){
                x_in_row++;
            }
            else{
                x_in_row = 0;
            }

        }
        if(x_in_row == size){ //whole cells in row has the same value
            return 'x';

        }
        x_in_row = 0;


    }

    var o_in_row = 0;
    for(var i = 0;i<size;i++){ // i - number of row
        for(var j = 0;j<size;j++){ //i*size+j - index of current cell
            if(cells[i*size+j].value == 'o'){
                o_in_row++;
            }
            else{
                o_in_row = 0;
            }

        }
        if(o_in_row == size){ //whole cells in row has the same value
            return 'o';

        }
        o_in_row = 0;


    }
    var x_in_col = 0;
    for(var i = 0;i<size;i++){ // i - number of row
        for(var j = 0;j<size;j++){ //i*size+j - index of current cell
            if(cells[i+size*j].value == 'x'){
                x_in_col++;
            }
            else{
                x_in_col = 0;
            }

        }
        if(x_in_col == size){ //whole cells in row has the same value
            return 'x';

        }
        x_in_col = 0;


    }

    var o_in_col = 0;
    for(var i = 0;i<size;i++){ // i - number of row
        for(var j = 0;j<size;j++){ //i*size+j - index of current cell
            if(cells[i+size*j].value == 'x'){
                o_in_col++;
            }
            else{
                o_in_col = 0;
            }

        }
        if(o_in_col == size){ //whole cells in row has the same value
            return 'x';

        }
        o_in_col = 0;


    }

    var x_bevel = 0;
    for(var i = 0;i<size;i++){
        if(cells[size*i+i].value == 'x'){
            x_bevel++;
        }
        else{
            x_bevel = 0;
        }
        if(x_bevel == size){
            return 'x';
        }
    }

    var o_bevel = 0;
    for(var i = 0;i<size;i++){
        if(cells[size*i+i].value == 'o'){
            o_bevel++;
        }
        else{
            o_bevel = 0;
        }
        if(o_bevel == size){
            return 'o';
        }
    }

    var x_second_bevel = 0;
    for(var i = 0;i<size;i++){
        if(cells[size-1+i*(size-1)].value == 'x'){
            x_second_bevel++;
        }
        else{
            x_second_bevel = 0;
        }
        if(x_second_bevel == size){
            return 'x';
        }
    }

    var o_second_bevel = 0;
    for(var i = 0;i<size;i++){
        if(cells[size-1+i*(size-1)].value == 'o'){
            o_second_bevel++;
        }
        else{
            o_second_bevel = 0;
        }
        if(o_second_bevel == size){
            return 'o';
        }
    }

}
function Cell(size, id) {

    var current_div = $('<div></div>');
    current_div.value = '';
    current_div.attr('id', 'cell_' + id);
    current_div.attr('class', 'cell');
    current_div.width(Math.floor($(window).width() / size - 17)); //i substract 17px - when i do not do that game does not fit to the window
    current_div.height(Math.floor($(window).width() / size - 17));
    current_div.on('click', function () {
        if (running && current_div.value == '') {
            if (is_current_player_is_x) {
                $(this).append('<img src="../img/x.png">');
                current_div.value = 'x';
            }
            else {
               $(this).append('<img src="../img/o.png">');
                current_div.value = 'o';
            }
            if(check(cells, size)){
                alert('Wygral gracz ' + check(cells, size));
                running = false;
            }
            is_current_player_is_x = !is_current_player_is_x;
        }
    });
    return current_div;
}

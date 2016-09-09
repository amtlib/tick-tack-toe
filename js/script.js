var cells = [];
var size = 3; //3x3 board
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

function Cell(size, id) {
    var value = ''; //can be 'x', 'o' or ''
    var current_div = $('<div><div>');
    current_div.attr('id', 'cell_' + id);
    current_div.attr('class', 'cell');
    current_div.width($(window).width() / size - 17); //i substract 17px - when i do not do that game does not fit to the window
    current_div.height($(window).width() / size - 17);
    current_div.on('click', function () {
        if (value == '') {
            if (is_current_player_is_x) {
                $(this).css('backgroundColor', 'blue');
                value = 'x';
            }
            else {
                $(this).css('backgroundColor', 'yellow');
                value = 'o';
            }
            is_current_player_is_x = !is_current_player_is_x;
        }
    });
    return current_div;
}

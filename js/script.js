var cells = [];
var size = 3; //3x3 board
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
    var current_div;
    for (var i = 0; i < size * size; i++) {
        current_div = $('<div><div>');
        current_div.attr('id', 'cell_' + i);
        current_div.attr('class', 'cell');
        current_div.width($(window).width() / size - 20);
        current_div.height($(window).width() / size - 20);
        cells.push(current_div);
    }
}

function display() {
    for (var i = 0; i < cells.length; i++) {
        $('body').append(cells[i]);
    }
}

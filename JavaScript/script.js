$(document).ready(function(){

    $('ul').on('click', 'li', function(){
        $(this).toggleClass('linha');
    });



    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#tarefa').val();
        
        if (novaTarefa.trim() !== '') {
            const novaTarefaElemento = $('<li></li>').text(novaTarefa);
            $('ul').append(novaTarefaElemento);
            $('#tarefa').val('');
        }
    });
});
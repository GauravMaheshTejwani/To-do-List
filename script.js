$(document).ready(function(){
    let addButton = $('.add-button');
    let field = $('.add-field');
    let tasks = $('.tasks');
    
    //Add task
    addButton.on('click', function(){
        let elem = `<li class="task">
                        <div class="task-checked col-1">
                            <input type="checkbox">
                        </div>
                        <div class="task-text col-2">${field.val()}</div>
                        <div class="task-removed col-3"></div>
                    </li>`;

        tasks.append(elem);

        field.val('');
    })


    //Remove Task
    
    tasks.on('click','.task-removed', function(){
        $(this).parent().remove();
    })

    //Checked
    

    tasks.on('change','.task-checked input', function(){
        $(this).parent().next().toggleClass('checked');
    })
})

//sortable
$('#tasks-list').sortable();
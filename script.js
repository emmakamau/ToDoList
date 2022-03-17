$(document).ready(function(){

    $("form#data-input-form").submit(function(event){
        event.preventDefault();
        var item = $("input#title").val()
        console.log(item)
        $("ul.item-list").append(
            `<li class="my-item" id="my-item_1">${item}<button class="del-btn">X</button></li>`
        )
    })
})
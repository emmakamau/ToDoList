$(document).ready(function(){

    $("form#data-input-form").submit(function(event){
        event.preventDefault();
        var item = $("input#title").val()
        
        //get the last id for our list item and  
        var lastId = $(".my-item:last").attr("id")
        var splitId = lastId.split("_")
        var nextIndex = Number(splitId[1])+1

        console.log("lastId:",lastId, "splitId:",splitId, "nextIndex:",nextIndex)

        $("ul.item-list").append(
            `<li class="my-item" id="my-item_${nextIndex}">${item}<button class="del-btn" id="del-btn" onclick="delItem()">X</button></li>`
        )
        $("input#title").val("") //Reset value after submit
    })
    $
})


//Javascript

function delItem(){
    var lastId = $(".my-item:last").attr("id")
    var splitId = lastId.split("_")
    var delIndex = Number(splitId[1])

    $("li#my-item_"+delIndex).remove()
}
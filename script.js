let listItems = document.querySelectorAll(".listItem");

listItems.forEach(function (listItem) {
    listItem.addEventListener("click", (ev) => {
        ev.target.classList.toggle("checkedListItem");
    });
});

        

let doneLists = document.querySelectorAll("input");
doneLists.forEach(function (doneList) {
    doneList.addEventListener("click", () => {
       let checkId = doneList.getAttribute('id');

        if(checkId==="first"){
            document.getElementById("firstList").classList.toggle("notDisplay");
        }else if(checkId==="second"){
            document.getElementById("secondList").classList.toggle("notDisplay");
        }else{
            document.getElementById("thirdList").classList.toggle("notDisplay");
        };
        
    });
    
});
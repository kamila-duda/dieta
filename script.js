let listItems = document.querySelectorAll(".listItem");

for (let i = 0; i < listItems.length; i++) {
    listItems[i].id = i;
};


listItems.forEach(function (listItem) {
    listItem.addEventListener("click", (ev) => {

        ev.target.classList.toggle("checkedListItem");
        let getId = ev.target.getAttribute("id");
        localStorage.setItem(getId, ev.target.className);
    });
});

window.onload = function () {

    for (i = 0; i < localStorage.length; i++) {
        listItems.forEach(function (listItem) {
            let idOfList = listItem.getAttribute("id");
            if (idOfList === localStorage.key(i)) {
                listItem.className = localStorage.getItem(localStorage.key(i));
            };
        });
        doneLists.forEach(function (doneList) {
            let idOfList = doneList.getAttribute("id");
            if (idOfList === localStorage.key(i)) {
                let nameList = idOfList + "List";
                document.getElementById(nameList).className = localStorage.getItem(localStorage.key(i));
                if (localStorage.getItem(localStorage.key(i)).includes("notDisplay")) {
                    document.getElementById(idOfList).checked = true;
                };
            };
        });
    };
};

let doneLists = document.querySelectorAll("input");
doneLists.forEach(function (doneList) {
    doneList.addEventListener("click", () => {
        let checkId = doneList.getAttribute('id');
        if (checkId === "first") {
            document.getElementById("firstList").classList.toggle("notDisplay");
            localStorage.setItem(checkId, document.getElementById("firstList").className);
        } else if (checkId === "second") {
            document.getElementById("secondList").classList.toggle("notDisplay");
            localStorage.setItem(checkId, document.getElementById("secondList").className);
        } else {
            document.getElementById("thirdList").classList.toggle("notDisplay");
            localStorage.setItem(checkId, document.getElementById("thirdList").className);
        };

    });

});
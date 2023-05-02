let inputbtn = document.querySelector("#inputBtn");
inputbtn.addEventListener("click", function () {
    let txtgoal = document.querySelector("#inputgoal");
    if (txtgoal.value !== "") {
        let list = document.createElement("li");
        list.classList.add("textlist");
        list.textContent = txtgoal.value;
        let goallist = document.querySelector(".goallist");
        goallist.appendChild(list);
        document.querySelector("#inputgoal").value = ""

        let dltBtn = document.createElement("i")
        dltBtn.classList.add("dltButton");
        dltBtn.classList.add("fa-solid");
        dltBtn.classList.add("fa-trash");
        list.appendChild(dltBtn);

        dltBtn.addEventListener("click", function () {
            dltBtn.parentElement.remove()
        })
    }
})


let boxbtns = document.querySelectorAll(".btn");
let newboxbtns = [].slice.call(boxbtns);
let textitems = document.querySelectorAll(".textitem");
for (let i = 0; i < boxbtns.length; i++) {
    boxbtns[i].addEventListener("click", function () {
        let order = newboxbtns.indexOf(this);
        let textitem = textitems[order];
        let task = textitem.value;
        if (task !== "") {
            createTask(task, order);
            textitem.value = "";
        }
    })
}
function createTask(item, index) {
    console.log(item, index);
    let p = document.createElement("p");
    p.textContent = item;
    let box1 = document.querySelectorAll(".box");
    console.log(box1[index]);
    box1[index].appendChild(p)

    let dltbtn = document.createElement("i");
    console.log(dltbtn);
    dltbtn.classList.add("dlt");
    dltbtn.classList.add("fa-solid");
    dltbtn.classList.add("fa-trash");
    p.appendChild(dltbtn)
    let parent = document.querySelectorAll(".box");
    dltbtn.addEventListener("click", function () {
        dltbtn.parentElement.remove()
    })
}
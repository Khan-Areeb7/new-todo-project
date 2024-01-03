const todos = document.querySelectorAll(".todo")
const all_status = document.querySelectorAll(".status");
let dragabletodo = null;

todos.forEach((todo) => {
    todo.addEventListener("dragstart", dragStart);
    todo.addEventListener("dragend", dragEnd);
})

function dragStart() {
    dragabletodo = this;
    setTimeout(() => {
        this.style.display = "none"
    }, 0);
}

function dragEnd() {
    dragabletodo = null;
    setTimeout(() => {
        this.style.display = "block"
    }, 0);

}

all_status.forEach((status) => {
    status.addEventListener("dragover", dragOver);
    status.addEventListener("dragenter", dragEnter);
    status.addEventListener("dragleave", dragLeave);
    status.addEventListener("drop", dragDrop);
})

function dragOver(e) {
    e.preventDefault();
}

function dragEnter() {
    this.style.border = "1px dashed #ccc"
}

function dragLeave() {
    this.style.border = "none"
    // e.preventDefault()
}

function dragDrop() {
    this.style.border = 'none';
    this.appendChild(dragabletodo);

}

// modal code;

const btns = document.querySelectorAll("[data-target-modal]");

const close_modal = document.querySelectorAll(".close-btn");

const overlay = document.querySelector("#overlay");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.targetModal).classList.add("active");
        overlay.classList.add("active");
    });
});

close_modal.forEach((btn) => {
    btn.addEventListener("click", () => {
        // document.querySelector(btn.dataset.targetModal).classList.remove("active");
        const modal = btn.closest(".modal");
        modal.classList.remove("active");
        overlay.classList.remove("active");
    });
});

window.onclick = (e) => {
    if (e.target == overlay) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => modal.classList.remove("active"));
        overlay.classList.remove("active");
    }
}

// create todo 

const todo_submit = document.getElementById("todo_submit");



todo_submit.addEventListener("click", createTodo);

function createTodo() {
    const todo_div = document.createElement("div");
    const input_value = document.getElementById("todo_input").value;
    const text = document.createTextNode(input_value);

    todo_div.appendChild(text);
    todo_div.classList.add("todo");
    todo_div.setAttribute("dragable", true);

    // create span;

    const span = document.createElement("span");
    const span_txt = document.createTextNode("\u00D7");
    span.classList.add("close")
    span.appendChild(span_txt);


    todo_div.appendChild(span);


    no_status.appendChild(todo_div);

    todo_div.addEventListener("dragsatrt", dragStart);
    todo_div.addEventListener("dragend", dragEnd);

    console.log(todo_div)

    span.addEventListener("click", () => {
        span.parentElement.style.display = "none";
    })


    // console.log(todo_div);
    document.getElementById("todo_input").value = "";
    todo_form.classList.remove("active");
    overlay.classList.remove("active");
}

const close_btns = document.querySelectorAll(".close");

close_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.parentElement.style.display = "none";
    });
})
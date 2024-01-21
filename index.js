function sayHello() {
    let inp = document.getElementById("inpName");

    if(inp.value.trim() == "") {
        return;
    }

    let hello = document.getElementById("helloTexti");
    hello.innerHTML = `Hola ${inp.value}. This is my first CF app.`;
    hello.style.display = "block";
}
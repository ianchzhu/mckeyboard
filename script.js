function handleClick(button) {
    var text = button.textContent;
    
    if (text === "ENTER↩") {
        var outputElement = document.getElementById("output");
        outputElement.innerHTML += "<br>";
    } else if (text === "_") {
        var outputElement = document.getElementById("output");
        outputElement.innerHTML += "_";
    } else if (text === ">_") {
         var ids = document.getElementById('output').innerHTML;
         alert (ids);
         console.log(ids);
         alert ("如果内容过长，可以进入consle复制内容（按F12点CONSLE/控制台）")
    } else {
        var imgSrc = button.querySelector('img').src;
        var outputElement = document.getElementById("output");
        outputElement.innerHTML += `<img src="${imgSrc}" alt="">`;
    }
}

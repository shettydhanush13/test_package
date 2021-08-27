const test = options => {
    const text = document.querySelectorAll(".testText");
    switch(options.type) {
        case "bold" : options.type = "900";
        break; 
        case "lite" : options.type = "100";
        break; 
        default :  options.type = "100";
    }
    text.forEach(e => e.style.fontWeight = options.type)
}

export { test }
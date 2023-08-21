const checkbox = document.getElementById('check');
const parentDiv = document.getElementById('cxTudo');
let childDiv; // Variável para referenciar a div criada

checkbox.addEventListener('change', function () {
    if (this.checked) {
        childDiv = document.createElement('div');
        childDiv.innerHTML = '<div id="privado"><label for="" id="labelCod">Código:</label><input type="password" id="ipt_cod"></div>'
        parentDiv.appendChild(childDiv);
    } else {
        if (childDiv) {
            parentDiv.removeChild(childDiv);
            childDiv = null;
        }
    }
});

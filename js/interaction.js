// right panel interaction

const panelTransform = document.getElementById('panel-transform');

for (const child of panelTransform.children) {
    child.children[0].addEventListener('click', () => {
        child.children[1].classList.toggle('panel-inner-hide');
        child.children[0].children[0].classList.toggle('arrow-rotate')
    })
}



// left panel interaction

const panelLayer = document.getElementById('panel-layer');
const btnLayer = document.getElementById('btn-layer');
const panelSource = document.getElementById('panel-source');
const btnSource = document.getElementById('btn-source');
const btnAddSource = document.getElementById('btn-add-source');

btnLayer.addEventListener('click', () => {
    panelLayer.classList.remove('hidden');
    btnSource.classList.remove('text-blue-600');
    if(panelSource.classList.contains('hidden') === false) {
        panelSource.classList.add('hidden');
    }
    if(btnLayer.classList.contains('text-blue-600') === false) {
        btnLayer.classList.add('text-blue-600');
    }
    if(btnAddSource.classList.contains('hidden') === false) {
        btnAddSource.classList.add('hidden');
    }
})       
btnSource.addEventListener('click', () => {
    panelSource.classList.remove('hidden');
    btnLayer.classList.remove('text-blue-600')
    if(panelLayer.classList.contains('hidden') === false) {
        panelLayer.classList.add('hidden');
    }
    if(btnSource.classList.contains('text-blue-600') === false) {
        btnSource.classList.add('text-blue-600')
    }
    if(btnAddSource.classList.contains('hidden')) {
        btnAddSource.classList.remove('hidden');
    }
})



// topbar interaction

const canvasSize = document.getElementById('canvas-size');
const displayWidth = document.getElementById('canvas-width');
const displayHeight = document.getElementById('canvas-height');

canvasSize.addEventListener('change', () => {
    let selectedOption = canvasSize.options[canvasSize.selectedIndex];

    displayWidth.value = selectedOption.getAttribute('data-width');
    displayHeight.value = selectedOption.getAttribute('data-height');

    document.getElementById('myCanvas').width = selectedOption.getAttribute('data-width');
    document.getElementById('myCanvas').height = selectedOption.getAttribute('data-height');

    ctx.rect(0, 0, c.width, c.height);
    ctx.fillStyle = "white";
    ctx.fill();
})

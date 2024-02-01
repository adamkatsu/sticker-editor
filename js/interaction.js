
        // right panel interaction
        const panelTransform = document.getElementById('panel-transform');

        for (const child of panelTransform.children) {
            child.children[0].addEventListener('click', () => {
                console.log(child.children[0]);
                child.children[1].classList.toggle('panel-inner-hide');
                child.children[0].children[0].classList.toggle('arrow-rotate')
            })
        }

        // left panel interaction
        const panelLayer = document.getElementById('panel-layer');
        const btnLayer = document.getElementById('btn-layer');
        const panelSource = document.getElementById('panel-source');
        const btnSource = document.getElementById('btn-source');

        btnLayer.addEventListener('click', () => {
            panelLayer.classList.remove('hidden');
            btnSource.classList.remove('text-blue-600');

            if(panelSource.classList.contains('hidden') === false) {
                panelSource.classList.add('hidden');
            }
            if(btnLayer.classList.contains('text-blue-600') === false) {
                btnLayer.classList.add('text-blue-600')
            }
        })        

        btnSource.addEventListener('click', () => {
            panelSource.classList.remove('hidden');
            btnLayer.classList.remove('text-blue-600');

            if(panelLayer.classList.contains('hidden') === false) {
                panelLayer.classList.add('hidden');
            }
            if(btnSource.classList.contains('text-blue-600') === false) {
                btnSource.classList.add('text-blue-600')
            }
        })
window.onload = function() {
    Particles.init({
        selector: '.background',
        maxParticles : 200,
        sizeVariations : 3,
        speed : 0.8,
        color : ['#bdc3c7','#95a5a6','#7f8c8d','#34495e'],
        minDistance : 100,
        connectParticles : true,
        // options for breakpoints
        responsive: [
            {
                breakpoint: 768,
                options: {
                    maxParticles: 200,
                    color: '#48F2E3',
                    connectParticles: false
                }
            }, {
                breakpoint: 425,
                options: {
                    maxParticles: 100,
                    connectParticles: true
                }
            }, {
                breakpoint:
                    320,
                options: {
                    maxParticles: 0
                    // disables particles.js
                }
            }
        ]
    })
}

const pause = state => {
    const button = document.querySelector('.button')
    if(state === false) {
        button.innerHTML = 'Resume'
        button.classList.add('active')
        Particles.pauseAnimation()
        state = true
        return state
    } else {
        button.innerHTML = 'Pause'
        button.classList.remove('active')
        Particles.resumeAnimation()
        state = false
        return state
    }
}
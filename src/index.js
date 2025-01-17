import './less/index.less'

// Your code goes here!
window.onload = function (evt) {
    console.log(`event ${evt.type} fired! Ready to go!`)
    const heading = document.querySelector('h1')
    heading.textContent = 'READY TO GO!'


    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
            .then(text => {
                heading.textContent += text
            })
    })


    document.body.addEventListener('click', evt =>{
        evt.target.classList.toggle('mirror')
    })


    document.body.addEventListener('dblclick', evt => {
        evt.target.innerHTML = '';
    })


    window.addEventListener('keydown', evt => {
        if(evt.key == 6){
            document.body.innerHTML = 'YOU RAN ORDER 66!'
        }
    })

    document.body.addEventListener('mousemove', evt => {
        const { clientX, clientY} = evt
        console.log(`mouse is at ${clientX}, ${clientY}`)
    })
}

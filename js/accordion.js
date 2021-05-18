document.addEventListener('DOMContentLoaded', () => {
    
    const featureLinkElems = document.querySelectorAll('.feature__link')
    const featureSubElems = document.querySelectorAll('.feature-sub')

    // Array.from(featureLinkElems).map((linkElem, index) => {
    //     linkElem.addEventListener('click', () => {  
    //         featureSubElems[index].classList.toggle('hidden')
    //         featureLinkElems[index].classList.toggle('feature__link_active')
    //     })
    // })

    featureLinkElems.forEach((button, index) => {
        button.addEventListener('click', () => {
            featureSubElems.forEach((featureSubElem, i)=> {
                if(i != index)
                    featureSubElem.classList.add('hidden')
            })
            featureLinkElems.forEach((featureLinkElem, i) => {
                if(i != index)
                 featureLinkElem.classList.remove('feature__link_active')
            })
            featureSubElems[index].classList.toggle('hidden')
            button.classList.toggle('feature__link_active')
        })
    })
})




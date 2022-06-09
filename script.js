
window.addEventListener('load',()=>{
    const form = document.querySelector('#form')
    const descri_new = document.querySelector('#descri_new')
    const cash_new = document.querySelector('#cash_new')
    //const btn_add = document.querySelector('#btn_add')
    const demo = document.querySelector('#demo')

    form.addEventListener('submit',(e)=>{
        e.preventDefault()

        
        // create descri, cash
        const descri = document.createElement('input') // story est modifiable en input
        const cash = document.createElement('input')

        // add value and class css for style
        descri.classList.add('style_none')                  // hide input border in style  
        descri.value = descri_new.value                 // recuperer la valeur entré

        cash.classList.add('style_none')                  // hide input border in style  
        cash.classList.add('cash_out')
        cash.value = cash_new.value 
        
        // create story element to regroup descri and cash
        const story = document.createElement('div')

        // append cash, decri in story
        story.appendChild(descri)
        story.appendChild(cash)

        // delete input value
        descri_new.value = ""                          // supprimer les derniers element de l'input
        cash_new.value = ""

        demo.appendChild(story)                       // ajouter story dans demo

    })
})
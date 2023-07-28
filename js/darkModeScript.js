
const setTheme = theme => localStorage.setItem('theme', theme)
const getTheme = () => localStorage.getItem('theme')

const changeTheme = (check, contant = 'body', type) => {

    if(check.checked){
        if(contant == 'body') document.body.classList.add('dark')
        else if(type == 'class') document.querySelector('.'+contant).classList.add('dark')
        else if(type == 'id') document.querySelector('#'+contant).classList.add('dark')

        document.querySelector('.theme').classList.add('dark')

        setTheme('dark')
    }
    else{
        if(contant == 'body') document.body.classList.remove('dark')
        else if(type == 'class') document.querySelector('.'+contant).classList.remove('dark')
        else if(type == 'id') document.querySelector('#'+contant).classList.remove('dark')

        document.querySelector('.theme').classList.remove('dark')
        
        setTheme('light')
    }

}

const createElements = (id, contant, type) => {
    const themeContent = document.querySelector(`#${id}`)
        
    const input = document.createElement('input')
    const label = document.createElement('label')
    const moon = document.createElement('i')
    const sun = document.createElement('i')
    const ball = document.createElement('div')
    

    input.type = 'checkbox'
    input.id = 'theme'
    input.setAttribute('onclick',`changeTheme(this,'${contant}','${type}')`)

    label.setAttribute('for', input.id)

    moon.className = 'fas fa-moon'
    sun.className = 'fas fa-sun'
    ball.className = 'ball'
    
    if(getTheme() == 'dark') input.checked = true

    label.appendChild(moon)
    label.appendChild(sun)
    label.appendChild(ball)

    themeContent.appendChild(input)
    themeContent.appendChild(label)

    return input
}

const connectTheme = () => {

    const font = document.createElement('link')
    const css = document.createElement('link')

    font.rel = css.rel = 'stylesheet'
    font.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    css.href = './darkMode.css'

    document.head.appendChild(font)
    document.head.appendChild(css)
}

const loadTheme = (id = 'toggleThemeButton', contant = 'body', type='document') => {
    if(document.querySelector(`#${id}`))
    {
        const input = createElements(id, contant, type)
        connectTheme()

        changeTheme(input, contant, type)

        

    }
}
loadTheme()


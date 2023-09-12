
const username_failed = document.querySelector('.username_failed')
const email_failed = document.querySelector('.email_failed')

const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const username = document.getElementById('username').value;
    const email = document.getElementById('Email').value;
    const pesan = document.getElementById('massage').value

    if(username === '' || email === ''){
        username_failed.style.display = 'block'
        email_failed.style.display = 'block'
        return false
    }else{
        username_failed.style.display = 'none'
        email_failed.style.display = 'none'
        alert('username anda : '+ username + '\nemail anda : '+ email + '\npesan anda : '+ pesan)
         alert('Terimakasih')
    }
    return
})
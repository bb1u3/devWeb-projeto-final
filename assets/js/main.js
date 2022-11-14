const inputNome = document.querySelector('#name');
const inputEmpresa = document.querySelector('#empresa');
const inputEmail = document.querySelector('#email');
const inputTelefone = document.querySelector('#telefone');
const buttonEnviar = document.querySelector('#submit-btn');

function openMenu() {
    let menu = document.querySelector('.header__nav');
    if(menu.style.display == 'none'){
        menu.style.display = 'block'
    }else{
        menu.style.display = 'none'
    }
}

buttonEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    checkInputs()
    setTimeout(() => {
        resetFields()
    }, 3000);
})

function checkInputs() {
    const nomeValue = inputNome.value;
    const empresaValue = inputEmpresa.value;
    const emailValue = inputEmail.value;
    const telefoneValue = inputTelefone.value;

    if (nomeValue === "") {
        setErrorFor(inputNome)
    } else {
        setSuccessFor(inputNome)
    }

    if (empresaValue === "") {
        setErrorFor(inputEmpresa)
    } else {
        setSuccessFor(inputEmpresa)
    }

    if (emailValue === "") {
        setErrorFor(inputEmail)
    } else {
        setSuccessFor(inputEmail)
    }

    if (telefoneValue !== "") {
        setSuccessFor(inputTelefone)
    }
}



function setErrorFor(input, msg = "Campo Obrigatório") {
    const inputParent = input.parentElement;
    const msgTag = inputParent.querySelector('small');
    inputParent.classList.add('error');
    msgTag.innerText = msg;

    setTimeout(() => {
        inputParent.classList.remove('error')
    }, 3000);
}

function setSuccessFor(input, msg = "") {
    const inputParent = input.parentElement;
    const msgTag = inputParent.querySelector('small');
    inputParent.classList.add('success');
    msgTag.innerText = msg;

    setTimeout(() => {
        inputParent.classList.remove('success')
    }, 3000);
}

    function resetFields() {
    inputNome.value = null
    inputEmpresa.value = null
    inputEmail.value = null
    inputTelefone.value = null
}
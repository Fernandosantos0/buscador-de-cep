'use strict'

const campoCep = document.querySelector('.cep');

const setCampos = dados => {
    console.log(dados)

    for(let key in dados) {
        if(document.querySelector(`#formulario .${key}`)) {
            document.querySelector(`#formulario .${key}`).value = dados[key];
        }

        if(key === 'uf') { 
            const campoEstado = document.querySelector(`#formulario .estado`);

            campoCep.option = 'dsdsf'
        }
    }

};

const requestApi = async cep => {
    try {
        const endpoint = `https://viacep.com.br/ws/${cep}/json/`;

        const response = await fetch(endpoint);
        const dados = await response.json();

        if(dados.erro) {
            alert('Este CEP não foi encontrando.\nTente de novo!');
            return;
        }

        setCampos(dados);
    } catch(err) {
        console.error(err);
    }

};

campoCep.addEventListener('blur', (e) => {
    const cep = campoCep.value.replace(/\D+/g, '');

    if(cep.length !== 8) {
        alert('CEP envalido!');
        return;
    }
        
    requestApi(cep);

});
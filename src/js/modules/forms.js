function forms() {
    const forms = document.querySelectorAll('form');

     const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с Вами свяжемся',
        failure: 'Что-то пошло не так...'
     };

     forms.forEach(item => {
        bindPostData(item);
     })

     const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await res.json();
    }    

     function bindPostData(form){
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // самая первая команда, которая должна быть написана при AJAX запросах!!!!
            
            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;

            // Лучше добавлять css стили напрямую в css file 
            statusMessage.style.cssText = `    
                display: block;
                margin: 0 auto;
            `;

            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries())); //Элегантный способ преобразования в JSON обьект


            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            })
            .catch(() => {
                showThanksModal(message.failure);
            })
            .finally(() => {
                form.reset();
            })
        })
     }
}

module.exports = forms;
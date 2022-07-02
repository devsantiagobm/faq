export function preguntas() {
    const preguntas = document.querySelectorAll('.content__item')
    preguntas.forEach(pregunta => {
        pregunta.addEventListener('click', e => {

            const revisarClase = !e.currentTarget.classList.contains('content__item--active')
            revisarClase ? aumentarTamaño(e) : disminuirTamaño(e);

            clasificarPreguntas(preguntas, e)

        })
    })


    function aumentarTamaño(e) {
        const pregunta = e.currentTarget.querySelector('.content__answer');
        pregunta.style.maxHeight = `${pregunta.scrollHeight}px`;
        e.currentTarget.classList.add('content__item--active')
    }

    function disminuirTamaño(e) {
        const pregunta = e.currentTarget.querySelector('.content__answer');
        pregunta.style.maxHeight = `${0}px`;
        e.currentTarget.classList.remove('content__item--active')
    }

    function clasificarPreguntas(preguntas, e) {
        preguntas.forEach(pregunta => {
            if (pregunta != e.currentTarget) {
                pregunta.classList.remove('content__item--active')
                const preguntaBox = pregunta.querySelector('.content__answer');
                preguntaBox.style.maxHeight = `${0}px`;
            }
        })
    }

}
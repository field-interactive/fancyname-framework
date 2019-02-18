/**
 *
 * @param {NodeSelector} form
 * @param {NodeSelector} required
 * @param {NodeSelector} button
 * @param {NodeSelector} dsgvo
 */

const formValidation = (
    form = document.querySelector('form'),
    required = document.querySelectorAll('[required]'),
    button = document.querySelector('form button[type="submit"]'),
    dsgvo = document.querySelector('#form_DSGVO')
) => {
    if (form) {
        form.addEventListener('click', () => {
            if (validateForm() && dsgvo.checked) {
                button.removeAttribute('disabled')
            } else {
                button.setAttribute('disabled', 'disabled')
            }
        })
    }

    const validateForm = () => {
        let isValid = true
        required.forEach(i => {
            if (i.value === '') isValid = false
        })
        return isValid
    }
}

export { formValidation }

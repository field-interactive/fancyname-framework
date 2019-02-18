import { $ } from './querySelectorAlias'

/**
 *
 * @param {NodeSelector} [form=document.querySelector('form')] - Selector for the Form
 * @param {NodeSelector} [required=document.querySelectorAll('[required]')] - Selector for all fields with the required attribute
 * @param {NodeSelector} [button=document.querySelector('form button[type="submit"]')] - Selector for submit button
 * @param {NodeSelector} [dsgvo=document.querySelector('#form_DSGVO')] - Selector for DSGVO Checkbox
 */

const formValidation = (
    form = $('form'),
    required = $('[required]'),
    button = $('form button[type="submit"]'),
    dsgvo = $('#form_DSGVO')
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

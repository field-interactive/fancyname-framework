/**
 * Client Side form validation to allow submitting Form only if all required fields and the DSGVO Checkbox are filled
 *
 * @param {Node} [form=document.querySelector('form')] - Selector for the Form
 * @param {NodeListOf} [required=document.querySelectorAll('[required]')] - Selector for all fields with the required attribute
 * @param {Element} [button=document.querySelector('form button[type="submit"]')] - Selector for submit button
 * @param {HTMLInputElement} [dsgvo=document.querySelector('#form_DSGVO')] - Selector for DSGVO Checkbox
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

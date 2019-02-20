/**
 * Client Side form validation to allow submitting Form only if all required fields and the DSGVO Checkbox are filled
 * @param form
 * @param required
 * @param button
 * @param dsgvo
 */

const formValidation = (
    form: HTMLELement = document.querySelector('form'),
    required: NodeList = document.querySelectorAll('[required]'),
    button: HTMLELement = document.querySelector('form button[type="submit"]'),
    dsgvo: HTMLELement = document.querySelector('#form_DSGVO')
): void => {
    if (form) {
        form.addEventListener('click', (): void => {
            if (validateForm() && dsgvo.checked) {
                button.removeAttribute('disabled')
            } else {
                button.setAttribute('disabled', 'disabled')
            }
        })
    }

    const validateForm = (): boolean => {
        let isValid: boolean = true;
        required.forEach((i: HTMLELement): void => {
            if (i.value === '') isValid = false
        });
        return isValid
    }
};

export {formValidation}

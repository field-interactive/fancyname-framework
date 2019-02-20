/**
 * Client Side form validation to allow submitting Form only if all required fields and the DSGVO Checkbox are filled
 * @param form
 * @param required
 * @param button
 * @param dsgvo
 *
 */

interface Form {
    (form?: HTMLElement, required?: NodeList, button?: HTMLElement, dsgvo?: HTMLInputElement): void
}

const formValidation: Form = (
    form = document.querySelector('form'),
    required = document.querySelectorAll('[required]'),
    button = document.querySelector('form button[type="submit"]'),
    dsgvo = document.querySelector('#form_DSGVO')
) => {
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
        required.forEach((i: HTMLInputElement): void => {
            if (i.value === '') isValid = false
        });
        return isValid
    }
};

export {formValidation}

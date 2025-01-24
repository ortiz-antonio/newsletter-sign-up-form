// @unocss-include

export default {
  'button-primary': `
      pa-md w-full bg-base rounded-lg color-accent font-bold text-step-0 text-wrap border-none 
      hover:(bg-gradient-to-r from-#ff5476 via-primary to-primary shadow-lg shadow-primary outline-unset) 
      focus:(outline-base outline-offset-4)
    `,

  'typography-heading': 'break-words text-step-5 font-bold color-secondary',

  'typography-base': 'text-step-0 color-base font-base font-regular line-height-standard',

  'link': `
      pa-1 color-accent
      focus:(outline-accent outline-solid)
      hover:decoration-none
    `,

  'field': `
    pa-sm block rounded-lg w-full text-step-0 border-solid border-base-light relative mt-3xs 
    focus:(outline-base outline-offset-6)
    `,

  'field-invalid': `
      focus:invalid:(bg-primary-light outline-primary outline-offset-0 placeholder-primary);
    `,

  'label-error': 'absolute right-0 top-0 hidden text-step-0 color-primary',
}

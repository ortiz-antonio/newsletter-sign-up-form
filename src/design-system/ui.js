export default {
  "button-primary": `
      pa-xs w-full bg-base rounded-lg color-accent font-bold text-step-0 text-wrap border-none 
      hover:(bg-gradient-to-r from-#ff5476 via-primary to-primary shadow-lg shadow-primary outline-unset) 
      focus:(outline-base outline-offset-4 cursor-pointer )
    `,

  "typography-heading": "m-0 break-words text-step-5 font-bold color-secondary",

  "typography-base":
    "text-step-0 color-base font-base font-regular line-height-standard",

  link: `
    color-accent
      focus:(outline-accent outline-solid pa-3xs)
      hover:decoration-none
    `,

  field: `
    pa-xs block rounded-lg w-full text-step-0 border-solid border-base-light relative mt-3xs 
    focus:(outline-base outline-offset-5)
    `,

  "field-invalid": `
      focus:user-invalid:(bg-primary-light outline-primary outline-offset-0 placeholder-primary);
    `,

  "label-error": "absolute right-0 top-0 hidden text-step-0 color-primary",
};

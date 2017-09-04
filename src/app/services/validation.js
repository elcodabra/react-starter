export const required = value => value ? undefined : 'Required';

export const number = value => value && isNaN(Number(value)) ? 'Number' : undefined;

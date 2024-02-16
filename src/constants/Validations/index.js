import * as yup from 'yup';

const title_validator = yup.string().required().label('* Task title');

const category_validator = yup.string().required().label('* Category');
const date_validator = yup.string().label('* Due date');

export {
    title_validator,
    category_validator,
    date_validator
};

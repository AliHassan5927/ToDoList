import { category_validator, date_validator, title_validator } from '@constants';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const CreateTaskSchema
    = Yup.object().shape({
        title: title_validator,
        category: category_validator,
        dueDate: date_validator
    })

export default yupResolver(CreateTaskSchema)
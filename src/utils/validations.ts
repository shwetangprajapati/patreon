import * as Yup from 'yup';

export const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
        amount: Yup.string().required('Amount is required'),
        message: Yup.string().required('Message is required'),

});
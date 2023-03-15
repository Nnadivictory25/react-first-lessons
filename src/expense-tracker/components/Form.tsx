import { FormEvent, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface FormProps {
  onSubmitForm: (formData: FieldValues) => void;
}

const categories = ['Groceries', 'Utilities', 'Entertainment'] as const;

const schema = z.object({
  description: z
    .string()
    .min(3, { message: 'Descripton must be at least 3 characters' }),
  amount: z.number({ invalid_type_error: 'Amount is required' }),
  category: z.enum(categories, { invalid_type_error: 'Category is required' }),
});

type FormData = z.infer<typeof schema>;

const Form = ({ onSubmitForm }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    onSubmitForm(data)
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Description
        </label>
        <input
          {...register('description')}
          id='description'
          type='text'
          className='form-control'
        />
        {errors.description && (
          <p className='text-danger'>{errors.description.message}</p>
        )}
      </div>

      <div className='mb-3'>
        <label htmlFor='age' className='form-label'>
          Amount
        </label>
        <input
          {...register('amount', { valueAsNumber: true })}
          id='amount'
          type='number'
          className='form-control'
        />
        {errors.amount && (
          <p className='text-danger'>{errors.amount.message}</p>
        )}
      </div>

      <div className='mb-3'>
        <label htmlFor='category' className='form-label'>
          Category
        </label>
        <select {...register('category')} className='form-select' id='category'>
          <option defaultValue=''></option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className='text-danger'>{errors.category.message}</p>
        )}
      </div>

      <button className='btn btn-primary' type='submit'>
        Submit
      </button>
      
    </form>
  );
};

export default Form;

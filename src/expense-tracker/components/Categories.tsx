import { useState } from 'react';

interface Expense {
  amount: number;
  id: number;
  category: string;
  description: string;
}

interface Category {
  expenses: Expense[];
  onDelete: (id: Number) => void;
}

const options = [
  { value: 'all', text: 'All categories' },
  { value: 'groceries', text: 'Groceries' },
  { value: 'utilities', text: 'Utilities ' },
  { value: 'entertainment', text: 'Entertainment' },
];

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const Categories = ({ expenses, onDelete }: Category) => {
  const [selectedOption, setSelectedOption] = useState('all');

  const total =
    selectedOption === 'all'
      ? expenses.reduce((a, b) => a + b.amount, 0)
      : expenses
          .filter((expense) => expense.category === selectedOption)
          .reduce((a, b) => a + b.amount, 0);

  const handleChange = (event: any) => {
    const { value } = event.target;
    setSelectedOption(value);
  };


 if (expenses.length === 0) return <h1 className='mt-5'>No Expenses</h1>

  return (
    <div className='mt-5'>
      <select
        value={selectedOption}
        className='form-select mb-3'
        onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>

      <table className='table table-bordered'>
        <thead>
          <tr>
            <th scope='col'>Description</th>
            <th scope='col'>Amount</th>
            <th scope='col'>Category</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {selectedOption === 'all'
            ? expenses.map((expense, i) => (
                <tr key={i}>
                  <td>{expense.description}</td>
                  <td>{formatter.format(expense.amount)}</td>
                  <td className='text-capitalize'>{expense.category}</td>
                  <td>
                  <button className='btn btn-outline-danger' onClick={() => onDelete(expense.id)}>Delete</button>
                  </td>
                </tr>
              ))
            : expenses
                .filter((expense) => expense.category === selectedOption)
                .map((expense, i) => (
                  <tr key={i}>
                    <td>{expense.description}</td>
                    <td>{formatter.format(expense.amount)}</td>
                    <td className='text-capitalize'>{expense.category}</td>
                    <td>
                      <button className='btn btn-outline-danger' onClick={() => onDelete(expense.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
        </tbody>
          <tfoot>
          <tr>
            <td>Total</td>
            <td>{formatter.format(total)}</td>
          </tr>
          </tfoot>
      </table>
    </div>
  );
};

export default Categories;

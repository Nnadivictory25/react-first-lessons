import { useState } from 'react';

interface Expense {
  amount: number;
  id: number;
  category: string;
  description: string;
}

interface Category {
  expenses: Expense[];
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

const Categories = () => {
  const [selectedOption, setSelectedOption] = useState('all');

  const [expenses, setExpenses] = useState([
    { id: 0, category: 'groceries', description: 'Milk', amount: 5.0 },
    { id: 1, category: 'groceries', description: 'Eggs', amount: 10.0 },
    { id: 2, category: 'utilities', description: 'Electricity', amount: 100.0 },
    { id: 3, category: 'entertainment', description: 'Movie', amount: 15.0 },
    { id: 4, category: 'groceries', description: 'Bread', amount: 5.0 },
    { id: 5, category: 'entertainment', description: 'Concert', amount: 30.0 },
  ]);

  const total =
    selectedOption === 'all'
      ? expenses.reduce((a, b) => a + b.amount, 0)
      : expenses
          .filter((expense) => expense.category === selectedOption)
          .reduce((a, b) => a + b.amount, 0);

  const handleChange = (event: any) => {
    const { value } = event.target;
    console.log(value);
    setSelectedOption(value);
  };

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
          {expenses.map((expense, i) => (
            <tr key={i}>
              <td>{expense.description}</td>
              <td>{formatter.format(expense.amount)}</td>
              <td className='text-capitalize'>{expense.category}</td>
              <td>
                <button className='btn btn-outline-danger'>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>{formatter.format(total)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Categories;

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div className='mb-3'>
      <select className='form-select mt-3' onChange={(event) => onSelectCategory(event.target.value)}>
        <option value=''>All categories</option>
        <option value='Groceries'>Groceries</option>
        <option value='Utilities'>Utilities</option>
        <option value='Entertainment'>Entertainment</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;

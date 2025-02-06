import { categories } from '../../App';
interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div className='mb-3'>
      <select className='form-select' onChange={(event) => onSelectCategory(event.target.value)}>
        <option value=''>All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;

import { options } from './constants';
import { OptionType } from './types';

type Props = {
  language: OptionType;
  setLanguage: (opt: OptionType) => void;
  setPage: (page: number) => void;
};
export const Filter = ({ language, setLanguage, setPage }: Props) => {
  return (
    <ul className="filter-list">
      {options.map((opt) => (
        <li key={opt}>
          <button
            onClick={() => {
              setLanguage(opt);
              setPage(1);
            }}
            className={language === opt ? 'selected' : ''}
          >
            {opt}
          </button>
        </li>
      ))}
    </ul>
  );
};

import { useState } from 'react';
import './App.css';

import { TopStars } from './TopStars';
import { Filter } from './Filter';
import { Option } from './types';

function App() {
  const [language, setLanguage] = useState<Option>('All');
  const [page, setPage] = useState(1);

  return (
    <>
      <Filter language={language} setLanguage={setLanguage} setPage={setPage}  />
      <TopStars language={language} page={page} setPage={setPage} />
    </>
  );
}

export default App;

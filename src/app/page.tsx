'use client';
import { useState } from 'react';
import Navigation from './Navigation';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';

export default function Home() {
  const [page, setPage] = useState(1);

  return (
    <div className="dark">
      <Navigation currentPage={page} onPageChange={setPage} />
      <div>{page === 1 && <Page1 />}</div>
      <div>{page === 2 && <Page2 />}</div>
      <div>{page === 3 && <Page3 />}</div>
      <div>{page === 4 && <Page4 />}</div>
      <div>{page === 5 && <Page5 />}</div>
      <div>{page === 6 && <Page6 />}</div>
      <div>{page === 7 && <Page7 />}</div>
    </div>
  );
}

import ThemeSelector from './ThemeSelector';

interface NavigationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

function Navigation({ currentPage, onPageChange }: NavigationProps) {
  return (
    <>
      <div className="bg-bgmain text-primary flex justify-center gap-2 p-4">
        <button
          className={`${currentPage === 1 ? 'text-gray-400' : ''}`}
          onClick={() => onPageChange(1)}
        >
          1
        </button>
        <button
          className={`${currentPage === 2 ? 'text-gray-400' : ''}`}
          onClick={() => onPageChange(2)}
        >
          2
        </button>
        <button
          className={`${currentPage === 3 ? 'text-gray-400' : ''}`}
          onClick={() => onPageChange(3)}
        >
          3
        </button>
        <button
          className={`${currentPage === 4 ? 'text-gray-400' : ''}`}
          onClick={() => onPageChange(4)}
        >
          4
        </button>
        <button
          className={`${currentPage === 5 ? 'text-gray-400' : ''}`}
          onClick={() => onPageChange(5)}
        >
          5
        </button>
        <button
          className={`${currentPage === 6 ? 'text-gray-400' : ''}`}
          onClick={() => onPageChange(6)}
        >
          6
        </button>
        <button
          className={`${currentPage === 7 ? 'text-gray-400' : ''}`}
          onClick={() => onPageChange(7)}
        >
          7
        </button>
        <button
          className={`${currentPage === 8 ? 'text-gray-400' : ''}`}
          onClick={() => onPageChange(8)}
        >
          8
        </button>
        <button
          className={`${currentPage === 9 ? 'text-gray-400' : ''}`}
          onClick={() => onPageChange(9)}
        >
          9
        </button> 
      </div>
      <ThemeSelector />
    </>
  );
}

export default Navigation;

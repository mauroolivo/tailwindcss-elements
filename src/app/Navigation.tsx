import ThemeSelector from "./ThemeSelector";

interface NavigationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

function Navigation({ currentPage, onPageChange }: NavigationProps) {
  return (
    <>
    <div className="flex justify-center gap-2 bg-bgmain text-primary p-4">
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
    </div>
    <ThemeSelector />
    </>
  );
}

export default Navigation;

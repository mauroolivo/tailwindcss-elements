'use client';
function ThemeSelector() {
  return (
    <div className="bg-bgmain text-primary flex justify-center gap-4 p-4">
      <button
        className="border-primary hover:bg-primary hover:text-bgmain rounded border px-4 py-2 transition"
        onClick={() => {
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.theme = 'light';
        }}
      >
        Light Theme
      </button>
      <button
        className="border-primary hover:bg-primary hover:text-bgmain rounded border px-4 py-2 transition"
        onClick={() => {
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.theme = 'dark';
        }}
      >
        Dark Theme
      </button>
      <button
        className="border-primary hover:bg-primary hover:text-bgmain rounded border px-4 py-2 transition"
        onClick={() => {
          // Check system preference
          const prefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)'
          ).matches;
          localStorage.removeItem('theme');
          // Set data-theme based on system preference
          if (prefersDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
          } else {
            document.documentElement.setAttribute('data-theme', 'light');
          }
        }}
      >
        System Theme
      </button>
    </div>
  );
}

export default ThemeSelector;

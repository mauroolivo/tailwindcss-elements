'use client';
import useScreenSize from '../hooks/useScreenSize';
export default function ViewPort() {
  const screen = useScreenSize();

  return (
    <p className="text-center text-2xl bold text-text">
      {screen.breakpoint}{' '}
      <span className='text-sm'>
        ({screen.width} x {screen.height})
      </span>
    </p>
  );
}

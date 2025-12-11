import ScreenSize from '../components/ScreenSize';
import MasonryGrid from '../components/MasonryGrid';
export default function Root() {
  return (
    <>
      <div className="space-y-4">
        <div className="container mx-auto px-4">
          <div className="striped-bg flex h-24 items-center justify-center rounded-lg border text-black/10 dark:text-white/12.5">
            <ScreenSize />
          </div>
        </div>

        <div id="pippo" className="container mx-auto px-4">
          <MasonryGrid />
        </div>
      </div>
    </>
  );
}

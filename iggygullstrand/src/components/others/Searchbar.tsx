import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

const Searchbar = () => {
  return (
    <div className="flex items-center justify-between py-12 px-24 bg-darkHard rounded-14 w-96">
      <input
        type="text"
        placeholder="search"
        className="flex-1 pr-2 bg-transparent text-15 poppins400 text-white placeholder:text-grayMedium outline-none"
      />
      <MagnifyingGlassIcon className="w-6 h-6 text-grayMedium" />
    </div>
  );
}

export default Searchbar

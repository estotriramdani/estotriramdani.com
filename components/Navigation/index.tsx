import { useState } from 'react';
import { motion } from 'framer-motion';

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function classToggle(isToggle: boolean, from: number, to: number) {
  return `inline-block h-[3px] w-${
    isToggle ? `${from}` : `${to}`
  } bg-slate-800 transition-all duration-150`;
}

export default function Navigation() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-40 flex h-14 items-center justify-between bg-slate-100 px-4 shadow-sm">
        <h1 className="font-serif font-extrabold text-slate-800">
          Esto Triramdani N
        </h1>
        <button
          type="button"
          className="relative flex flex-col items-end gap-1"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span className={classToggle(toggleMenu, 4, 6)} />
          <span className={classToggle(toggleMenu, 6, 6)} />
          <span className={classToggle(toggleMenu, 4, 5)} />
        </button>
      </nav>
      {toggleMenu && (
        <div
          className="fixed top-14 left-0 right-0 z-50 w-full overflow-auto bg-slate-100 lg:mx-auto lg:w-[400px]"
          style={{ height: 'calc(100vh - 3.5rem)' }}
        >
          <p>ok</p>
        </div>
      )}
    </>
  );
}

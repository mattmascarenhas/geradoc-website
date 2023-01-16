export function Header() {
  return (
    <div
      className={`grid grid-cols-12 fixed bg-[#111111] px-[12rem] pt-14 pb-20 justify-between items-center  `}
    >
      <div className="col-span-12 xl:col-span-2">
        <img src="logo-geradoc.png" alt="" className="w-[80%]" />
      </div>
      <ul className="flex gap-10 xl:col-span-8 col-span-12 justify-center text-xl font-bold">
        <li>
          <a href="/">Início</a>
        </li>
        <li>
          <a href="/presentation">Apresentação do App</a>
        </li>
        <li>
          <a href="/instructions">Como utilizar</a>
        </li>
        <li>
          <a href="/about-us">Sobre nós</a>
        </li>
      </ul>
      <div className="col-span-12 xl:col-span-2">
        <button className="px-9 py-4 border text-xl font-bold">
          Contate agora
        </button>
      </div>
    </div>
  );
}

export default Header;

import Logo from "../components/Logo";

export function Header() {
  return (
    <div
      className="flex mx-[12rem] mt-14 mb-20 justify-between items-center
    "
    >
      <Logo />
      <ul className="flex gap-10">
        <li>Home</li>
        <li>Advogados</li>
        <li>Áreas de atuação</li>
        <li>Sobre nós</li>
      </ul>
      <button className="px-9 py-4 border">Contate agora</button>
    </div>
  );
}

export default Header;

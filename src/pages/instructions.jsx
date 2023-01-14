import Header from "../components/Header";

export function Instructions() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-12 mx-[12rem] ">
        <div className="col-span-12">
          <div className="flex flex-col mb-8">
            <span className="text-4xl">1º Passo</span>
            <span className="text-2xl text-justify my-3 text-zinc-500">
              Registrar um cliente. Um cliente pode ter vários blocos e possui
              todas as informações necessárias para qualquer tipo de
              procedimento.
            </span>
            <div className="flex justify-center">
              <img src="cadastrar-cliente.png" alt="" className="w-[80%]" />
            </div>
          </div>
          <div className="flex flex-col mb-8">
            <span className="text-4xl">2º Passo</span>
            <span className="text-2xl text-justify my-3 text-zinc-500">
              Registrar um texto. Um texto pode pertencer a vários blocos, porém
              são será aceito repetição de texto num mesmo bloco.
            </span>
            <div className="flex justify-center">
              <img src="cadastrar-texto.png" alt="" className="w-[80%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructions;

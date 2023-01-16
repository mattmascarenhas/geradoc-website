import Footer from "../components/Footer";
import Header from "../components/Header";

export function Instructions() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-12 mx-[12rem] pt-[220px] ">
        <div className="col-span-12">
          <div className="flex flex-col mb-8">
            <span className="text-4xl">1º Passo</span>
            <span className="text-2xl text-justify mt-3 mb-5 text-zinc-500">
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
            <span className="text-2xl text-justify mt-3 mb-5 text-zinc-500">
              Registrar um texto. Um texto pode pertencer a vários blocos, porém
              são será aceito repetição de texto num mesmo bloco.
            </span>
            <div className="flex justify-center">
              <img src="cadastrar-texto.png" alt="" className="w-[80%]" />
            </div>
          </div>
          <div className="flex flex-col mb-8">
            <span className="text-4xl">3º Passo</span>
            <span className="text-2xl text-justify mt-3 mb-5 text-zinc-500">
              Criar um bloco. O bloco será criado, porém vazio.
            </span>
            <div className="flex justify-center">
              <img src="criar-bloco.png" alt="" className="w-[60%]" />
            </div>
          </div>
          <div className="flex flex-col mb-8">
            <span className="text-4xl">4º Passo</span>
            <span className="text-2xl text-justify mt-3 mb-5 text-zinc-500">
              Selecionar o bloco e os textos. Os textos selecionados farão parte
              do bloco selecionado. Não poderá selecionar o mesmo texto mais de
              uma vez para associar ao bloco.
            </span>
            <div className="flex justify-center">
              <img src="associar-texto-bloco.png" alt="" className="w-[50%]" />
            </div>
          </div>
          <div className="flex flex-col mb-8">
            <span className="text-4xl">5º Passo</span>
            <span className="text-2xl text-justify mt-3 mb-5 text-zinc-500">
              Selecionar o cliente e o bloco. O bloco selecionado pertencerá ao
              cliente.
            </span>
            <div className="flex justify-center">
              <img
                src="associar-cliente-bloco.png"
                alt=""
                className="w-[50%]"
              />
            </div>
          </div>
          <div className="flex flex-col mb-8">
            <span className="text-4xl">6º Passo</span>
            <span className="text-2xl text-justify mt-3 mb-5 text-zinc-500">
              Por fim você pode vizualizar todos os blocos cadastrados. Nas
              ações você pode vizualizar os blocos, fazer o download do arquivo
              .doc ou deletar o bloco.
            </span>
            <div className="flex justify-center">
              <img src="vizualizar-blocos.png" alt="" className="w-[70%]" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Instructions;

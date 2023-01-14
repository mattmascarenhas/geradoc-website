import Header from "../components/Header";

export function Presentation() {
  return (
    <div>
      <Header />
      <div className="flex mx-[12rem]">
        <div className="flex flex-col w-1/2">
          <span className="text-4xl">Sobre o App</span>
          <span className="text-3xl mt-12">Resumo</span>
          <span className="text-2xl text-justify my-12 text-zinc-500">
            O intuito do sistema é cadastrar clientes, textos e blocos, para que
            no final um arquivo .doc seja gerado com os dados desejados.
          </span>
          <span className="text-3xl mt-12">Conceito do App</span>
          <span className="text-2xl text-justify my-12 text-zinc-500">
            A ideia do sistema, é um advogado ter, por exemplo, diversos textos
            referentes a leis. Ele poderá criar um bloco e inserir esses textos
            como desejar. Esses textos podem existir em blocos diferentes.
            Quando houver alteração, surtirá efeito em todos os blocos em que o
            texto se encontra.
          </span>
          <span className="text-3xl mt-12">Exemplo prático</span>
          <span className="text-2xl text-justify my-12 text-zinc-500">
            Vamos supor que um texto está se referindo a uma lei que por ventura
            mudou, e esse texto está atrelado a vários blocos e clientes. No
            momento em que ele editar texto, a mudança surtirá efeito em todos
            os blocos de todos os clientes que contém aquele texto, facilitando
            a vida do advogado, onde não irá precisar mais mudar de maneira
            manual procurando os blocos que contém aquela determinada
            informação.
          </span>
          <span className="text-3xl mt-12">Considerações finais</span>
          <span className="text-2xl text-justify my-12 text-zinc-500">
            Acreditamos que a simplificação de tarefas repetitivas ajuda o
            profissional a desempenhar melhor o seu papel. Essa ferramenta tem o
            objetivo de simplicar essas tarefas, da melhor maneira possível.
          </span>
        </div>

        <div className="flex flex-col ml-12 items-center w-1/2">
          <span className="text-2xl font-bold mb-4">TABELAS DO APP</span>

          <img
            src="tabela-clientes.png"
            alt="tabela de clientes"
            className="w-[900px]"
          />
          <span className="mb-4 text-zinc-500">TABELA DE CLIENTES</span>
          <img
            src="tabela-textos.png"
            alt="tabela de textos"
            className="w-[700px]"
          />
          <span className="mb-4 text-zinc-500">TABELA DE TEXTOS</span>
          <img
            src="tabela-blocos.png"
            alt="tabela de blocos"
            className="w-[700px]"
          />
          <span className="mb-4 text-zinc-500">TABELA DE BLOCOS</span>
        </div>
      </div>
    </div>
  );
}

export default Presentation;

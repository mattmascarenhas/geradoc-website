import Header from "../components/Header";
import SocialLinks from "../components/Social-Links";

export function AboutUs() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-12 mx-[12rem]">
        <div className="col-span-12 xl:col-span-6 flex flex-col">
          <span className="text-4xl">Sobre</span>
          <span className="text-2xl text-justify my-12 text-zinc-500">
            Me chamo Matheus Mascarenhas, sou desenvolvedor Full Stack, porém
            tenho graduação em engenharia civil e estou concluindo duas
            pós-graduações na área de tecnologia. Há um ano atrás, migrei para
            área de desenvolvimento de softwares, onde cada dia me sinto
            desafiado a aprender sempre mais. Possuo alguns trabalhos pessoais,
            onde desenvolvi durante esse um ano de aprendizado. Trabalho
            utilizando Javascript, em específico, React e Node, e nos meus
            bancos de dados utilizo o SQL,
          </span>
        </div>
        <div className="col-span-12 xl:col-span-6 flex justify-center items-center flex-col">
          <img
            src="img-04.png"
            alt=""
            className="block border-solid rounded-[50%] border-lime-800 border-[2px] h-[112px] w-[112px]"
          />
          <span className="flex justify-center m-2">@mattmascarenhas</span>
          <div className="flex flex-col justify-center items-center">
            <span className="mt-4 text-xl">Outros Trabalhos</span>
            <div className="flex flex-col items-center justify-center">
              <button className="bg-zinc-700 rounded-xl border border-white  border-opacity-30 mt-6 gap-4 bg-opacity-50 w-[440px] h-[56px] text-2xl">
                Site Portfólio Front
              </button>
              <button className="bg-zinc-700 rounded-xl border border-white  border-opacity-30 mt-6 gap-4 bg-opacity-50 w-[440px] h-[56px] text-2xl">
                Site Portfólio Front
              </button>
              <button className="bg-zinc-700 rounded-xl border border-white  border-opacity-30 mt-6 gap-4 bg-opacity-50 w-[440px] h-[56px] text-2xl">
                Site Portfólio Front
              </button>
            </div>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;

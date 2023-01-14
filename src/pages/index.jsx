import Header from "../components/Header";

export function Index() {
  return (
    <div className="">
      <Header />
      <div className="grid grid-cols-12 mx-[12rem]">
        <div className=" flex flex-col col-span-12 xl:col-span-8 ">
          <span className="text-6xl text-justify  pr-40">
            Advogando com eficiência e transparência, a um toque de distância.
          </span>
          <span className="text-2xl pt-9 pr-40 text-justify my-12 text-zinc-500">
            Um sistema pensado para ser um facilitador na vida de pessoas que
            trabalham diáriamente advogando. Pensado em facilitar e simplificar
            a maneira de se fazer petições, onde seu tempo será otimizado e você
            terá tudo a um toque de distância.
          </span>

          <div className="flex w-[438px] relative items-center mt-10">
            <input
              type="text"
              className=" w-[438px] h-[74px] bg-zinc-700 rounded-full pl-14 pr-36"
              placeholder="Entre com seu email"
            />
            <button className=" w-[137px] h-[62px] inset-y-0 right-0 p-2 rounded-full bg-[#E3B748] absolute m-[6px] text-black font-bold">
              Vamos Conversar
            </button>
          </div>
        </div>
        <div className="flex justify-end col-span-12 xl:col-span-4">
          <img src="img-03.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Index;

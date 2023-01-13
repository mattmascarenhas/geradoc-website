import Header from "../components/Header";

export function Index() {
  return (
    <div>
      <Header />
      <div className="flex mx-[12rem]">
        <div className=" flex flex-col w-2/3">
          <span className="text-7xl  pr-40">
            Você não precisa lutar contra eles sozinho.
          </span>
          <span className="text-2xl pt-9 pr-40 text-justify my-12 text-zinc-500">
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae inceptos faucibus
            himenaeos tortor eget, hac massa gravida arcu interdum proin curae.
          </span>

          <div className="flex w-[438px] relative items-center mt-10">
            <input
              type="text"
              className=" w-[438px] h-[74px] bg-zinc-700 rounded-full pl-14 pr-36"
              placeholder="Enter your eamil address"
            />
            <button className=" w-[137px] h-[62px] inset-y-0 right-0 p-2 rounded-full bg-[#E3B748] absolute m-[6px] text-black font-bold">
              Vamos Conversar
            </button>
          </div>
        </div>
        <div className="flex justify-end w-1/3">
          <img src="img-01.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Index;

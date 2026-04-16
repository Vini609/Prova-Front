import Image from "next/image";
import hero from "@/public/hero.png";

export default function Hero() {
    return (
        <section className="mx-30 my-3  overflow-hidden  border-[#1f1f1f] bg-black p-6 ">
            <div className="grid grid-cols-[1fr_minmax(280px,42%)] max-[980px]:min-h-0 max-[980px]:grid-cols-1">
                <div className="self-center  max-[980px]:order-2 ">
                    <h1 className="m-0 flex flex-col gap-1 text-[clamp(2.6rem,9vw,7.2rem)] leading-[0.93] font-extrabold tracking-[-0.04em]">
                        <span>No Pain</span>
                        <span>No Gain</span>
                    </h1>

                    <p className="my-[2.15rem] max-w-\[540px] text-[clamp(0.96rem,1.35vw,1.1rem)] leading-[1.6] text-[#828282] max-[980px]:my-[1.35rem]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button
                            type="button"
                            className="min-w-\[170px] cursor-pointer rounded-[0.55rem]  bg-[#3ccf9d] px-5 py-3.5 text-[1.06rem] font-bold text-white "
                        >
                            Saiba mais
                        </button>
                        <button
                            type="button"
                            className="min-w-\[170px] cursor-pointer rounded-[0.55rem]  bg-[#141414] px-5 py-3.5 text-[1.06rem] font-bold text-[#ffffff] "
                        >
                            Planos
                        </button>
                    </div>
                </div>

                <div
                    className="relative flex items-end justify-end  max-[980px]:justify-center"
                    aria-hidden="true"
                >
                    <Image
                        src={hero}
                        alt="Mulher malhando"
                        className="relative h-[min(90vh,840px)] w-auto object-contain object-right max-[980px]:h-auto "
                    />
                </div>
            </div>
        </section>
    );
}
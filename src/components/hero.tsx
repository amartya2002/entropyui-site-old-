import { FaChevronRight, FaCircle } from "react-icons/fa";
function Hero() {
    return (
        <section className=" mt-24 mx-6 md:mx-20 ">

            <div className=" space-y-1 max-w-xl tracking-tighter text-dark ">
                <p className="text-5xl md:text-6xl   font-bold ">Build faster
                </p>

                <p className="text-5xl md:text-6xl font-bold text-dark ">Build better
                </p>

                {/* <p className="text-5xl md:text-6xl  font-bold  text-white bg-gradient-to-r from-red-400  to-indigo-400 inline-block">Beautifully</p> */}

                <h1 className=" flex items-center bg-gradient-to-r from-red-400 via-indigo-400 to-orange-400 text-transparent bg-clip-text text-5xl font-bold md:text-6xl animate-text   ">Build Beautiful...  </h1>
                {/* <FaCircle className=" mt-6 text-dark h-3"/> */}
                <p className="pt-4   tracking-normal text-xl text-silver ">
                    Unstyled, accessible components for building high‑quality design systems and web apps in React.
                </p>

<div className="pt-3">
<button className="flex items-center font-bold bg-black text-slate-200 py-2 px-5 rounded-md text-lg hover:bg-slate-900 hover:scale-105 active:scale-110 duration-150 ">Get Started <FaChevronRight className="ml-2 h-3 text-slate-200 font-light w-3 "/> </button>
</div>




            </div>
        </section>
    )
}
export default Hero;
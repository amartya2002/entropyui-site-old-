function ComponentsContainer() {

    const team = [
        {
            avatar: "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
            name: "Martiana dialan",
            title: "Product designer"
        },
        {
            avatar: "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
            name: "Micheal colorand",
            title: "Software engineer"
        },
        {
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            name: "Brown Luis",
            title: "Full stack engineer"
        },
        {
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            name: "Lysa sandiago",
            title: "Head of designers"
        },
        {
            avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            name: "Daniel martin",
            title: "Product designer"
        },
        {
            avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
            name: "Vicky tanson",
            title: "Product manager"
        },
    ]

    return (

        <section className="mt-16 mx-6 md:mx-20 overflow-auto     ">

            <div className="flex flex-row space-x-6 sm:space-x-7 overflow-x-auto  p-2   ">
                {/* <div className="w-64 h-64 border rounded-lg  bg-gradient-to-r from-slate-900 to-slate-700 ">
    Componegggnt1ffffffffdf
  </div>
  <div className="w-64 h-64 border rounded-lg  bg-gradient-to-r from-slate-900 to-slate-700">
    Componggggenggggt2
  </div>
  <div className="w-64 h-64 border rounded-lg  bg-gradient-to-r from-slate-900 to-slate-700">
    Componggggenggggt2
  </div>
  <div className="w-64 h-64 border rounded-lg  bg-gradient-to-r from-slate-900 to-slate-700">
    Componggggenggggt2
  </div> */}


                <div className=" border rounded-md  bg-gradient-to-br from-red-400  to-white hover:scale-105 duration-150 ">
                    <div className="w-64 md:w-72  h-64">

                    </div>
                </div>

                <div className=" border rounded-md  bg-gradient-to-br from-red-400  to-white hover:scale-105 duration-150 ">
                    <div className="w-64 md:w-72 h-64">

                    </div>
                </div>

                <div className="  rounded-md  bg-gradient-to-br from-red-400  to-white  hover:scale-105 duration-150  ">
                    <div className="w-64 md:w-72 h-64">
                        <div className="flex flex-col justify-center items-center mt-16 space-y-2 ">
                            
                            <button className="bg-blue-500 text-white rounded px-5 py-2 shadow">Sign in</button>
                            <button className="bg-black text-white rounded-full px-5 py-2 shadow">Get Started</button>
                            <button className="bg-blue-500 text-white rounded-xl px-5 py-2 shadow">Register</button>
                            {/* <button className="bg-red-500 text-white rounded px-5 py-2 shadow">Delete</button> */}
                            
                            

                        </div>
                    
                    </div>
                </div>

                <div className=" border rounded-md  bg-gradient-to-br from-red-400  to-white hover:scale-105 duration-150 ">
                    <div className="w-64 md:w-72 h-64">

                    </div>
                </div>






            </div>



        </section>
    )

}
export default ComponentsContainer;


// background-color: #4158D0;
// background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);

import IMAGES from "@/public";

const OurProcessData = [
    {
        id: 1,
        title: "Top Marketing Agency",
        detail1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, tenetur at explicabo, ad nobis fugit voluptatum totam asperiores eius sunt maxime animi tempore, repellendus eos illo ut? Dolorum, dignissimos voluptatibus.",
        detail2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, tenetur at explicabo, ad nobis fugit voluptatum totam asperiores eius sunt maxime animi tempore, repellendus eos illo ut? Dolorum, dignissimos voluptatibus.",
        imgSrc: IMAGES.digitalmarketing,
    },
    {
        id: 2,
        title: "Your Business Goal",
        detail1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, tenetur at explicabo, ad nobis fugit voluptatum totam asperiores eius sunt maxime animi tempore, repellendus eos illo ut? Dolorum, dignissimos voluptatibus.",
        detail2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, tenetur at explicabo, ad nobis fugit voluptatum totam asperiores eius sunt maxime animi tempore, repellendus eos illo ut? Dolorum, dignissimos voluptatibus.",
        imgSrc: IMAGES.digitalmarketing,
    },

];

function OurProcessComponent() {
    return (
        <>
            {/* #Mobile View */}
            <div className="w-[90%] lg:hidden grid grid-cols-1 mt-28 mx-auto gap-10">
                {OurProcessData.map((item) => (
                    <div key={item.id} className="mb-12 flex flex-col gap-5">
                        <img src={item.imgSrc} alt={item.title} className="w-full h-auto" />
                        <div className="text-left  flex flex-col gap-5">
                            <h1 className="text-[#800000] text-2xl font-extralight">{item.title}</h1>
                            <p className=" text-sm text-black/60">{item.detail1}</p>
                            <p className=" text-sm text-black/60">{item.detail2}</p>
                            <div>
                                <button className="text-sm py-2 px-4 rounded bg-[#800000] text-white">Get In Touch</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* #Pc View */}
            <div className="w-[80%] hidden lg:grid grid-cols-1 mt-28 mx-auto gap-16">
                {OurProcessData.map((item, index) => (
                    <div key={item.id}>
                        {index % 2 === 0 ? (
                            <div className="grid grid-cols-2 gap-10">
                                <div>
                                    <img src={item.imgSrc} alt={item.title} className="w-full h-auto" />
                                </div>
                                <div className="flex flex-col justify-center text-left gap-5">
                                    <h1 className="text-[#800000] text-4xl font-semibold">{item.title}</h1>
                                    <p className=" text-sm text-black/60">{item.detail1}</p>
                                    <p className=" text-sm text-black/60">{item.detail2}</p>
                                    <div>
                                        <button className="text-sm py-2 px-4 rounded bg-[#800000] text-white">Get In Touch</button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 gap-10">
                                <div className="flex flex-col justify-center text-left gap-5">
                                    <h1 className="text-[#800000] text-4xl font-semibold">{item.title}</h1>
                                    <p className=" text-sm text-black/60">{item.detail1}</p>
                                    <p className="text-sm text-black/60">{item.detail2}</p>
                                    <div>
                                        <button className="text-sm py-2 px-4 rounded bg-[#800000] text-white">Get In Touch</button>
                                    </div>
                                </div>
                                <div>
                                    <img src={item.imgSrc} alt={item.title} className="w-full h-auto" />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default OurProcessComponent;

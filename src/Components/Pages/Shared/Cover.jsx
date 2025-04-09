
// step-10___________________________________________________________________________________________1

const Cover = ({img, title}) => {
    return (
        <div>

           <div
             className="hero h-150"
             style={{
               backgroundImage: `url(${img}) `,
             }}>
             <div className="hero-overlay"></div>
             <div className="hero-content text-neutral-content text-center">
               <div className="max-w-md w-70 md:w-200 p-10 bg-gray-700 opacity-80">
                 <h1 className="mb-5 text-2xl md:text-5xl font-bold uppercase text-white">{title}</h1>
                 <p className="mb-5 text-white">
                    Would you like to try a dish?  
                 </p>
                 
               </div>
             </div>
           </div>
                       
        </div>
    );
};

export default Cover;
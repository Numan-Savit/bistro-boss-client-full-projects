// step-5______________________________________________________________________________________________1
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className=" w-60 md:w-3/12 mx-auto mb-5 md:mb-10 mt-5 md:mt-10">
            <p className="text-yellow-600 text-center mb-3">---{subHeading}---</p>
            <h3 className="text-2xl md:text-3xl uppercase border-y-4 py-4 text-center">{heading}</h3>  
        </div>
    );
};

export default SectionTitle;
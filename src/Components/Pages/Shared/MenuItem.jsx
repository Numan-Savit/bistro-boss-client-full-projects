

const MenuItem = ({item}) => {
    const { name, image, price, recipe } = item;
    return (
        // step-6_____________________________________________________________________________5
        <div className="flex space-x-4 w-80 md:w-full  mx-auto mb-10">

            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[50px] object-center object-cover  md:w-[100px]" src={image} alt="" />

            <div>
                <h3 className="uppercase">{name}-----</h3>
                <p>{recipe}</p>
            </div>

            <p className="text-yellow-600">${price}</p>
            
        </div>
    );
};

export default MenuItem; 
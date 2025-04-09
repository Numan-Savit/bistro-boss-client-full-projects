// step-7____________________________________________________________________________________1

import SectionTitle from "../Shared/SectionTitle";
import featured from '../../../assets/home/featured.jpg';
import bannerimg from '../../../assets/home/featured.jpg';
const Featured = () => {
    return (
        <div className=" pt-5 mb-10"
           style={{
            backgroundImage: `url(${bannerimg})`,
        }}>
        
            <SectionTitle heading={"Featured Items"} subHeading={"Check it out"}></SectionTitle>

            <div className="md:flex justify-center items-center py-10 md:py-20 px-15 md:px-36">
                <div><img src={featured} alt="" /></div>
                <div className="md:ml-10 text-white opacity-95">
                    <p className="mt-5 md:mt-0">Aug 20, 2026</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nemo corrupti
                         facere facilis dignissimos debitis rem excepturi ad accusantium, maxime deserunt 
                         dolore repudiandae dolor. Voluptates laborum, facilis optio iusto maiores eius 
                         perferendis expedita iure velit vitae aliquid nesciunt enim tempore
                         ipsum accusamus fuga recusandae molestiae aut eveniet quae! Maxime, fugiat?
                    </p>
                    <button className="btn text-white mt-4 bg-slate-700">Order Now</button>
                </div>
            </div>
            
        </div>
    );
};

export default Featured;
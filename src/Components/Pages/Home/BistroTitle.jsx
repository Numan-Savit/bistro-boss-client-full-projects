
// step-4__________________________________________________________________________________________
import img from '../../../assets/home/chef-service.jpg';

const BistroTitle = () => {
    return (
        <div className='mb-10'>

          <div
            className="hero h-80 lg:h-96"
            style={{
              backgroundImage: `url(${img })`,
            }}>
            <div className="hero-overlay"></div>
            <div className="hero-content  text-black text-center bg-white w-80 lg:w-1/2 ">
              <div className="max-w-md">
                <h1 className="mb-5 text-2xl lg:text-4xl">Bistro Boss</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                  quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                
              </div>
            </div>
          </div>
        </div>
    );
};

export default BistroTitle;
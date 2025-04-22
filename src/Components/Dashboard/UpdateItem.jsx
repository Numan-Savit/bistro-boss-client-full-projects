
// step-51____________________________________________________1

// import { useLoaderData } from "react-router-dom";
import SectionTitle from "../Pages/Shared/SectionTitle";
import { useForm } from "react-hook-form";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useLoaderData } from "react-router-dom";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`; 

const UpdateItem = () => {

    //  step-51________________________________________________________3

    const {name, category, price, recipe, _id} = useLoaderData();

    const axiosPublic = useAxiosPublic();
    const axiosSecure = UseAxiosSecure();

     const { register, handleSubmit} = useForm();

   
   

    const onSubmit = async (data) => {

        console.log(data)
        const imageFile = {image: data.image[0]};
        const res = await axiosPublic.post(img_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

       
        if(res.data.success){
            //now send data to backend server image url
           const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: res.data.data.display_url
           }

           const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
           console.log(menuRes.data);

           if(menuRes.data.modifiedCount > 0){
            // reset();
              alert('Item Updated Successfully');
           }
        }
        // console.log(res.data);
    }

    return (
        <div>

            <SectionTitle heading={"Update Items"} subHeading={"Check it out"}></SectionTitle>

               <div className="card mx-auto ml-10 p-10  bg-base-100 shadow-xl">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=" mx-auto ml-10 ">
                      <div className="ml-10 ">
                        <legend className="fieldset-legend">Recipe Name?</legend>
                        <input type="text" defaultValue={name} className="input w-2xl mt-2" placeholder="Recipe Name"{...register("name")} />
                      </div>
  
                     <div className="flex ml-10 mt-5 mb-5 ">
                        <div className="w-xl">
                          <label className="font-medium">Item Selection</label><br />
                            <select className="select select-bordered mt-2 " defaultValue={category} {...register("category")}>
                              <option value="pizza">Pizza</option>
                               <option value="soup">Soup</option>
                               <option value="dessert">Dessert</option>
                              <option value="drinks">Drinks</option>
                            </select> 
                        </div>
                        <div className="w-full">
                          <label className="font-medium">Price</label><br />
                          <input type="number" defaultValue={price} className="input w-80 mt-2" placeholder="Price"{...register("price")} />
                        </div>
                     </div>
  
                        <div className="ml-10">
                          <label className="font-medium">Recipe Details</label><br />
                          <textarea className="textarea textarea-bordered mt-2" defaultValue={recipe} placeholder="Recipe Details"{...register("recipe")}></textarea>
                        </div>
  
                        <div className="ml-10 mt-10">
                          <input type="file" className="file-input"  {...register("image")} />
                        </div>
  
                    </div>
  
                     
                     <button className="btn btn-primary mt-10 text-white ml-20">
                        Update Item
                     </button>
                   </form>
                 </div>
            
        </div>
    );
};

export default UpdateItem;
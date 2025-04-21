
// step-46____________________________________________________________1

import { useForm } from "react-hook-form";
import SectionTitle from "../Pages/Shared/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`; //step-47________________1

const AddItems = () => {

    // step-47_____________________________2

    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = UseAxiosSecure(); //step-48__________________________2
    const onSubmit = async (data) => {

        console.log(data)
        const imageFile = {image: data.image[0]};
        const res = await axiosPublic.post(img_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        // step-48_____________________________________1

        if(res.data.success){
            //now send data to backend server image url
           const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: res.data.data.display_url
           }

           const menuRes = await axiosSecure.post('/menu', menuItem);
           console.log(menuRes.data);

           if(menuRes.data.insertedId){
            reset();
            alert('Item Added Successfully');
           }
        }
        // console.log(res.data);
    }

    return (

        <div>

            <SectionTitle heading={'Add An Items'} subHeading={"What's New"}></SectionTitle>

            <div className="card mx-auto ml-10 p-10  bg-base-100 shadow-xl">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" mx-auto ml-10 ">
                  <div className="ml-10 ">
                    <legend className="fieldset-legend">Recipe Name?</legend>
                    <input type="text" className="input w-2xl mt-2" placeholder="Recipe Name"{...register("name")} />
                  </div>

                 <div className="flex ml-10 mt-5 mb-5 ">
                    <div className="w-xl">
                      <label className="font-medium">Item Selection</label><br />
                        <select className="select select-bordered mt-2 " {...register("category")}>
                          <option value="pizza">Pizza</option>
                           <option value="soup">Soup</option>
                           <option value="dessert">Dessert</option>
                          <option value="drinks">Drinks</option>
                        </select> 
                    </div>
                    <div className="w-full">
                      <label className="font-medium">Price</label><br />
                      <input type="number" className="input w-80 mt-2" placeholder="Price"{...register("price")} />
                    </div>
                 </div>

                    <div className="ml-10">
                      <label className="font-medium">Recipe Details</label><br />
                      <textarea className="textarea textarea-bordered mt-2" placeholder="Recipe Details"{...register("recipe")}></textarea>
                    </div>

                    <div className="ml-10 mt-10">
                      <input type="file" className="file-input" {...register("image")} />
                    </div>

                </div>

                 
                 <button className="btn btn-primary mt-10 text-white ml-20">
                    Add Item <FaUtensils></FaUtensils>
                 </button>
               </form>
            </div>

        </div>
    );
};

export default AddItems;
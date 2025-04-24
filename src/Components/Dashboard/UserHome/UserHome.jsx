import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../Hooks/UseAuth";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const UserHome = () => {
    const {user} = UseAuth();

    // chart data load

    const {data:chartData = []} = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await UseAxiosSecure.get('/order-stats');
            return res.data;
        }
    })


    // custom shape ver chart

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
       const TriangleBar = (props) => {
         const { fill, x, y, width, height } = props;
      
         return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
       };


    return (
        <div>

            <h2 className="text-2xl ml-10 mt-20">
                <span>Hi , Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>

            <div className="mt-10 ml-10">
               <BarChart
                   width={890}
                   height={500}
                   data={chartData}
                   margin={{
                     top: 20,
                     right: 50,    
                     left: 20,
                     bottom: 50,  
                   }}
                 >
                   <CartesianGrid strokeDasharray="3 3" />
                   <XAxis dataKey="category" angle={-20} textAnchor="end" interval={0} />
                   <YAxis />
                   <Tooltip />                         {/* <-- Tooltip */}
                   <Bar
                     dataKey="quantity"
                     shape={<TriangleBar />}
                     // label={{ position: "top" }}
                     label={false}
                   >
                     {chartData.map((entry, index) => (
                       <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                     ))}
                   </Bar>
                 </BarChart>
                              
            </div>
            
        </div>
    );
};

export default UserHome;
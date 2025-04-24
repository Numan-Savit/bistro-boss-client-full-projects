
// step-60__________________________________________________________1

import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { FaUsers } from "react-icons/fa";


import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];



const AdminHome = () => {

    const {user} = UseAuth();
    const axiosSecure = UseAxiosSecure();

    // step-60____________________________________2

    const {data:stats} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }

    });

    // chart data load

    const {data:chartData = []} = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
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
            <h2 className="mt-20 ml-15 text-2xl">
                <span className="mt-20">Hi , Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>

            <div>

               <div className="stats shadow ml-15 mt-5 gap-20">
                    <div className="stat">
                      <div className="stat-figure text-secondary">
                        <FaUsers className="text-3xl"></FaUsers>
                      </div>
                      <div className="stat-title text-2xl">Users</div>
                      <div className="stat-value">{stats?.users}</div>
                      <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>
                  
                    <div className="stat">
                      <div className="stat-figure text-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="inline-block h-8 w-8 stroke-current">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                        </svg>
                      </div>
                      <div className="stat-title text-2xl">Total Orders</div>
                      <div className="stat-value">{stats?.orders}</div>
                      <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>
                  
                    <div className="stat">
                      <div className="stat-figure text-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="inline-block h-8 w-8 stroke-current">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                        </svg>
                      </div>
                      <div className="stat-title text-2xl">Total Items</div>
                      <div className="stat-value">{stats?.menuItems}</div>
                      <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                </div>

            </div>

            <div>
                <div className="mt-10">
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

            
        </div>
    );
};

export default AdminHome;
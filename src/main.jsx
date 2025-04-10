
//QueryClientProvider______step-30_____________________________________________4

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  QueryClient,
  QueryClientProvider,  //step-30_______________________________________________3
 
} from '@tanstack/react-query'

const queryClient = new QueryClient()


import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './providers/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
     <AuthProvider>
       <QueryClientProvider client={queryClient}>    
          <div className='md:w-7xl mx-auto'>
            <RouterProvider router={router} />
          </div>
      </QueryClientProvider> 
     </AuthProvider>

  </StrictMode>,
)

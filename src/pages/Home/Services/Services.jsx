import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
   const [services, setServices] = useState([]);

   useEffect(() => {
      fetch('services.json')
         .then((res) => res.json())
         .then((data) => setServices(data))
   }, [])

   return (
      <div className='my-14'>
         <div className='text-center space-y-5'>
            <h3 className="text-[#FF3811] text-3xl font-semibold">Service</h3>
            <h2 className='text-5xl font-bold'>Our Service Area</h2>
            <p className='md:w-1/2 mx-auto capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
         </div>
         
         <div className='grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-6 mt-10'>
            {
               services.map(service => <ServiceCard
                  key={service._id}
                  service={service}
               ></ServiceCard>)
            }
         </div>
      </div>
   );
};

export default Services;
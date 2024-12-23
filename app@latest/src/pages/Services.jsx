import React from 'react'
import Card from '../components/Card'
import hello from "../images/hello.jpg"
import hi from "../images/hi.jpg"
import why from "../images/why.jpg"
const Services = () => {
  return (
    <div className=' flex-grow px-8 py-12 text-center'>
      <div>
        <h1 className=' font-bold flex flex-col gap-3 mt-5 text-lg'>
          Explore our Security solution
        </h1>
        <p className=' mt-4 mb-4'>
          Comprehensive systems tailored to safeguard your home and business, ensuring peace of mind every step of the way.
        </p>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        <Card
        img={hello}
          title="Residential Security"
          heading="Smart Home Security Systems"
          description="Protect your home with cutting-edge smart technology. Our home security systems include high-definition cameras, motion detectors, and real-time alerts, giving you complete control and peace of mind from anywhere."
        />
        <Card
        img={hi}
          title="Business Security"
          heading="Commercial Surveillance Solutions"
          description="Ensure the safety of your workplace with our advanced surveillance systems. Designed for businesses of all sizes, our solutions feature high-resolution cameras, cloud storage, and 24/7 monitoring to keep your property secure."
        />
        <Card
        img={why}
          title="Comprehensive Security"
          heading="Access Control and Alarm Systems"
          description="Restrict unauthorized access and protect your premises with our state-of-the-art access control systems. Integrated with responsive alarms, our solutions are perfect for homes, offices, and large-scale facilities."
        />
      </div>
    </div>
  )
}

export default Services
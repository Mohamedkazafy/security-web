import ServiceCard from './ServiceCard';
import intrusionImage from '../images/Intrusion_Detection_and_Alarm_Systems.jpg';
import smart from "../images/Smart Surveillance Systems.jpg"
import access from "../images/Access Control Solutions.jpg"
const Services = () => {
  const services = [
    {
      imgSrc: smart,
      title: 'Smart Surveillance Systems',
      description: 'Monitor your property in real-time with high-definition cameras and advanced motion detection.',
    },
    {
      imgSrc: intrusionImage,
      title: 'Intrusion Detection and Alarm Systems',
      description: 'Stay one step ahead with responsive alarms that safeguard your premises 24/7.',
    },
    {
      imgSrc: access,
      title: 'Access Control Solutions',
      description: 'Secure your space with customizable access systems that grant entry only to authorized personnel.',
    },
  ];

  return (
    <section className="services bg-green-300 py-12 px-4 text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Advanced Security Systems You Can Trust</h2>
      <p className="text-center text-lg text-gray-600 mb-8">
        Protect your home and business with cutting-edge solutions designed for your peace of mind.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;

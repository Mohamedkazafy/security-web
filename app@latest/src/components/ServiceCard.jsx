const ServiceCard = ({ imgSrc, title, description }) => {
    return (
      <div className="service-card border rounded-md p-4 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow">
        <img src={imgSrc} alt={title} className="w-16 h-16 mb-4" />
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    );
  };
  
  export default ServiceCard;
  
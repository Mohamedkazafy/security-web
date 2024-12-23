const Testimonial = ({ quote, author }) => {
    return (
      <div className="testimonial border rounded-md p-4 shadow-md text-center">
        <p className="text-sm italic text-gray-600 mb-4">"{quote}"</p>
        <h4 className="text-sm font-bold">{author}</h4>
      </div>
    );
  };
  
  export default Testimonial;
  
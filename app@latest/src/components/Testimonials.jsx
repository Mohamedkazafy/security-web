import Testimonial from './Testimonial';

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        'Berimbolo Security completely transformed the way I protect my home. Their smart surveillance system is easy to use, and I can check my cameras from anywhere.',
      author: 'Twisted Fate',
    },
    {
      quote:
        'As a small business owner, security is crucial. The intrusion detection system from Berimbolo Security gives me peace of mind, knowing my shop is monitored 24/7.',
      author: 'Miss Fortune',
    },
    {
      quote:
        "I've been using Berimbolo Security's access control system at our office for six months now. It’s incredibly reliable, and the team was helpful in customizing it to meet our needs.",
      author: 'C. Teemo',
    },
  ];

  return (
    <section className="testimonials bg-gray-100 py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Customer's Opinions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

import { useState } from 'react';

function ContactPage() {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <div className="h-[66vh] md:h-[68.9vh] text-center flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold mb-4">Under Construction</h1>
      <p className="text-lg mb-4">Be the first to know when our contact page is live! Subscribe now:</p>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center">
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="px-4 py-2 mr-2 mb-2 md:mb-0 border border-gray-300 rounded-md focus:outline-none"
        />
        <button type="submit" className="px-6 py-2 bg-[#B3550A] text-white outline-none rounded-md hover:bg-transparent hover:text-[#B3550A]">Subscribe</button>
      </form>
    </div>
  );
}

export default ContactPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const TourPackages = () => {
  const navigate = useNavigate();

  const packages = [
    { id: 'mombasa', title: 'Mombasa North Coast', imageUrl: 'src/assets/coast.jpg', packagesCount: 3 },
    { id: 'diani', title: 'Diani/Ukunda', imageUrl: 'src/assets/Ukunda.jpg', packagesCount: 2 },
    { id: 'malindi', title: 'Malindi/Watamu', imageUrl: 'src/assets/malindi.jpg', packagesCount: 2 },
    { id: 'maasai', title: 'Maasai Mara', imageUrl: 'src/assets/masai mara.jpg', packagesCount: 2 },
    { id: 'amboseli', title: 'Amboseli', imageUrl: 'src/assets/Amboseli.jpg', packagesCount: 1 },
    { id: 'samburu', title: 'Samburu', imageUrl: 'src/assets/Samburu.jpg', packagesCount: 1 },
    { id: 'naivasha', title: 'Naivasha', imageUrl: 'src/assets/Nakuru.jpg', packagesCount: 1 },
    { id: 'nakuru', title: 'Nakuru', imageUrl: 'src/assets/Naivasha.jpg', packagesCount: 1 },
    { id: 'mt-kenya', title: 'Mt Kenya', imageUrl: 'src/assets/Kenya.jpg', packagesCount: 1 },
  ];

  const handlePackageClick = (id) => {
    navigate(`/packages/${id}`);
  };

  return (
    <div className="p-16">
      <h2 className="text-3xl font-bold text-[#1E3A8A]">Tour Packages</h2>
      <p className="mt-4">
        View and explore student-developed tour packages that combine innovation and academic research.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
          >
            <img src={pkg.imageUrl} alt={pkg.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div
              className="absolute inset-0 bg-transparent group-hover:bg-[#8B4513] group-hover:bg-opacity-50 transition-all duration-300"
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
              <h3 className="text-xl font-bold text-white">{pkg.title}</h3>
              <p
                className="text-white cursor-pointer hover:text-[#ff7f00] transition-colors duration-300"
                onClick={() => handlePackageClick(pkg.id)}
              >
                {`(${pkg.packagesCount}) Packages`}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Link */}
      <div className="mt-8 text-center">
        <a
          href="/packages"
          className="text-[#1E3A8A] underline hover:text-[#ff7f00] transition-colors duration-300  no-underline"
        >
          View More...
        </a>
      </div>

      {/* Footer Section */}
      <footer className="mt-12 text-center">
        <div className="p-4">
          <a href="#about" className="text-[#1E3A8A]">About Us</a>
          <span className="mx-2">|</span>
          <a href="#programs" className="text-[#1E3A8A]">Programs</a>
          <span className="mx-2">|</span>
          <a href="#contact" className="text-[#1E3A8A]">Contact</a>
        </div>
        <div className="text-gray-500">© 2024 Foundations of Tourism Institute</div>
      </footer>
    </div>
  );
};

export default TourPackages;



export default function Footer() {
  return (
    <div className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <p className="text-sm">&copy; 2024 Prabin Sapkota. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">
            Terms of Use
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">
            Privacy Policy
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

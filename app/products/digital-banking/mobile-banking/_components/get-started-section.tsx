import Image from "next/image";

const GetStartedSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {/* For New Clients */}
          <div className="bg-[#e8f4f1] rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              For New Clients
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              To begin your mobile banking journey with Covenant MFB, please visit any of 
              our branches to open an account and get set up. Our friendly team will guide 
              you through the process.
            </p>
          </div>

          {/* For Existing Clients */}
          <div className="bg-[#e8f4f1] rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              For Existing Clients
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
              Download CovenantMFB – Edge Banking from the Google Play Store (for 
              Android users) or the Apple App Store (for iPhone users). Once downloaded, 
              open the app and follow the simple on-screen steps to get started—it's quick 
              and easy
            </p>
            
            
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col justify-center sm:col-span-2 lg:col-span-1">
            <div className="flex items-start gap-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1D9B5E]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg 
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#1D9B5E]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  For further assistance, kindly visit your nearest Covenant MFB branch.
                </p>
              </div>
            </div>
            
            <button className="w-full bg-[#1D9B5E] hover:bg-[#168a54] text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-colors duration-300 text-sm sm:text-base">
              Contact Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
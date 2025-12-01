"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <section className="bg-[#033224] py-10 text-center  lg:p-0 flex lg:text-left  lg:items-left relative overflow-hidden">
 
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-white space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Start Your Digital
                <br />
               Banking Journey
              </motion.h1>
              
              
            </div>

            {/* Download Section */}
            <motion.div 
              className="space-y-4   bg-white/4 w-full lg:w-fit backdrop-blur-md border border-white/8 rounded-2xl px-5 py-6 h-fit "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-white">Download our App</h3>
              
              <div className="flex flex-col  sm:flex-row justify-center items-center w-full gap-4">
                {/* Google Play Button */}
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.covenantmfb.mobileapp&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/20 backdrop-blur-sm border w-full  border-white/20 rounded-xl px-6 py-3 flex justify-center items-center gap-3 hover:bg-black/30 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src="/google-play 1.svg"
                    alt="Google Play"
                    width={24}
                    height={24}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Get it On</div>
                    <div className="text-sm font-semibold text-white">Google Play</div>
                  </div>
                </motion.a>

                {/* App Store Button */}
                <motion.a
                  href="https://apps.apple.com/ng/app/covenantmfb-edge-banking/id6504527106"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/20 backdrop-blur-sm border w-full border-white/20 rounded-xl px-6 py-3 flex justify-center items-center gap-3 hover:bg-black/30 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src="/apple 1.svg"
                    alt="App Store"
                    width={24}
                    height={24}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Download on the</div>
                    <div className="text-sm font-semibold text-white">App Store</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>

        
            
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div 
            className="relative hidden lg:flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Phone mockup */}
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Image
                  src="/iphone-15-mockups 1.png"
                  alt="Mobile Banking App"
                  width={300}
                  height={600}
                  className="max-w-none w-[280px] md:w-[320px] lg:w-[360px] h-auto drop-shadow-2xl"
                  priority
                />
              </motion.div>

             
            </div>
          </motion.div>
        </div>
      </div>

    
    
    </section>
  );
};

export default HeroBanner;
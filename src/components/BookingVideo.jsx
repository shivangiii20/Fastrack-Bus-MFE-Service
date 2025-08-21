import React from "react";

const BookingVideo = () => {
  return (
  
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/booking.mp4"
        autoPlay
        muted
        loop
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Centered Content */}
      {/* <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
          Book Your Bus Now
        </h1>
        <p className="text-lg max-w-2xl drop-shadow-md">
          Fast, reliable, and affordable bus booking at your fingertips.
        </p>
      </div> */}
    </div>



    
  );
};

export default BookingVideo;
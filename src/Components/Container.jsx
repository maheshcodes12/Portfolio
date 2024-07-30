import React from "react";

 const Container = ({ children }) => {
  return (
    <div className=" !mx-auto max-w-4xl px-2 sm:px-3 lg:px-3">
      <div className="!mx-auto">
      {children}
      </div>  
    </div>
  );
};

export default Container


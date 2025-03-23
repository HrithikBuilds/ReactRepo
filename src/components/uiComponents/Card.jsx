const Card = ({ children, className = "" }) => {
    return (
      <div className={`p-6 border rounded-lg shadow-lg bg-white ${className}`}>
        {children}
      </div>
    );
  };
  
  export default Card;
  
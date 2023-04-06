import "../motdupresi/motdupresi.css";
function Container({ children, ...props }) {
  return (
    <div className="ps-32" {...props}>
      {children}
    </div>
  );
}

export default Container;

import colors from "./colors";

const Badge = ({ children, color, variant }) => {

    // edit border radius 
    const borderRadius = variant === "pill" ? "12px" : "2px";

  
    const styles = colors[color.toLowerCase()] || colors.default;
  
    return (
      <div className="flex justify-center items-center pt-2">
        <div
          className="text-center px-2 py-1"
          style={{
            backgroundColor: styles.bg,
            color: styles.text,
            borderRadius: borderRadius,
          }}
        >
          <h1 className="font-[12px]">{children}</h1>
        </div>
      </div>
    );
  };
  
  export default Badge;
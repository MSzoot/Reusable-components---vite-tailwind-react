import { IoIosCheckmarkCircle } from "react-icons/io";
import { GoAlertFill } from "react-icons/go";
import { FaInfoCircle, FaTimesCircle } from "react-icons/fa";

const Banner = ({ children, variant, title }) => {
  const getStyle = (variant) => {
    switch (variant) {
      case "success":
        return {
          container: { backgroundColor: "#ECFDF5", color: "#34D399" },
          heading: { color: "#065F46" },
          paragraph: { color: "#047857" },
        };
      case "warning":
        return {
          container: { backgroundColor: "#FFFBEB", color: "#FBBF24" },
          heading: { color: "#92400E" },
          paragraph: { color: "#B45309" },
        };
      case "error":
        return {
          container: { backgroundColor: "#FEF2F2", color: "#F87171" },
          heading: { color: "#92400E" },
          paragraph: { color: "#B45309" }, 
        };
      case "neutral":
        return {
          container: { backgroundColor: "#EFF6FF", color: "#60A5FA" },
          heading: { color: "#1E40AF" },
          paragraph: { color: "#1C51B9" },
        };
      default:
        return {
          container: { backgroundColor: "#FFF", color: "#000" },
          heading: { color: "#000" },
          paragraph: { color: "#000" },
        };
    }
  };

  const getIcon = (variant) => {
    switch (variant) {
      case "success":
        return <IoIosCheckmarkCircle />;
      case "warning":
        return <GoAlertFill />;
      case "error":
        return <FaTimesCircle />;
      case "neutral":
        return <FaInfoCircle />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto mt-10 max-w-[800px] p-4 rounded-lg" style={getStyle(variant).container}>
      <div className="flex items-center gap-2">
        {getIcon(variant)}
        <h1 style={getStyle(variant).heading}>{title}</h1>
      </div>
      <p className="text-xs pt-2 pl-6" style={getStyle(variant).paragraph}>
        {children}
      </p>
    </div>
  );
};

export default Banner;

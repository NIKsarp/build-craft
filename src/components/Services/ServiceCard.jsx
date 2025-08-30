import { useToast } from "@/contexts/ToastContextProvider";

export const ServiceCard = ({ icon, title, text, features }) => {
  const { addToast } = useToast();

  const handleServiceClick = (serviceName) => {
    addToast({
      title: "Learn more",
      description: `Learn more about ${serviceName} feature will be implemented soon!`,
      variant: "success",
      duration: 3000,
    });
  };

  return (
    <>
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2.5">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
          {/* <icon /> */}
          {icon}
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">{text}</p>

        <ul className="space-y-2 mb-6">
          {features.map((feature) => (
            <li key={feature} className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleServiceClick(title)}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-2 px-4 rounded-md transition-colors"
        >
          Learn More
        </button>
      </div>
    </>
  );
};

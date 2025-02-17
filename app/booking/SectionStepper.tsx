import { FiGlobe, FiUser, FiCreditCard } from "react-icons/fi";

export const SectionStepper = ({
  sections,
  activeSection,
  setActiveSection,
}: {
  sections: any[];
  activeSection: number;
  setActiveSection: (index: number) => void;
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "FiGlobe":
        return <FiGlobe />;
      case "FiUser":
        return <FiUser />;
      case "FiCreditCard":
        return <FiCreditCard />;
      default:
        return null;
    }
  };

  return (
    <div className="flex mb-8 gap-4">
      {sections.map((section, index) => (
        <button
          key={index}
          onClick={() => setActiveSection(index)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${
            activeSection === index
              ? "bg-amber-600 text-white"
              : "bg-white/10 text-gray-600 hover:bg-white/20"
          }`}
        >
          {getIcon(section.icon)}
          <span className="hidden sm:inline">{section.title}</span>
        </button>
      ))}
    </div>
  );
};

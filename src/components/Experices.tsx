import React from "react";

interface TimelineItemProps {
  role: string;
  company: string;
  date: string;
  logo?: string;
  points: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  role,
  company,
  date,
  logo,
  points,
}) => {
  return (
    <div className="flex gap-6 mb-12 max-w-4xl mx-auto">
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12  border-4 border-white flex items-center justify-center bg-[#0B0F19] overflow-hidden">
          {logo ? (
            <img src={logo} alt={company} className="w-full h-full object-cover" />
          ) : (
            <span className="font-bold text-sm">{company[0]}</span>
          )}
        </div>
        <div className="h-full w-1 bg-white mt-2"></div>
      </div>

      {/* Content */}
      <div className="bg-[#111827] p-6 rounded-2xl shadow-lg flex-1 text-white">
        <p className="text-gray-400 mb-2">{date}</p>
        <h2 className="text-2xl font-bold">{role}</h2>
        <p className="text-blue-400 font-semibold mb-4">{company}</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experiences: React.FC = () => {
  const data = [
    {
      role: "React.js Developer",
      company: "Encrobytes",
      date: "Sep 2023 - Jul 2024",
      logo: "https://encrobytes.com/img/icon.jpg",
      points: [
        "Developing and maintaining web applications using React.js and related technologies.",
        "Collaborating with designers, product managers, and other developers.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback.",
      ],
    },
    {
      role: "React. js Developer",
      company: "People Maketh",
      date: "Oct 2024 - Apr 2025",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQF02rB7FViWkw/company-logo_100_100/company-logo_100_100/0/1724225996638/people_maketh_logo?e=2147483647&v=beta&t=1A7D5FiKOnVlUbNFFFlKI5M-E8KY-9WPqHuR1yx6Xj8", // Apna company logo yaha dalna
      points: [
        "Building and maintaining scalable web applications.",
        "Working with React.js, Node.js, and Typescript technologies.",
        "Creating responsive, user-friendly  with Material UI.",
        "Ensuring performance optimization and cross-browser support.",
        "Developed a CRM plateform designed to streamline healthcare management and improve interactions between healthcare providers and platients",
      ],
    },
  ];

  return (
    <div className="bg-[#0B0F19] min-h-screen py-16 px-4">
      <div className="text-center mb-16">
        <h3 className="text-3xl font-semibold text-gray-400">What I had done so far</h3>
        <h1 className="text-5xl font-bold text-white">Work Experience</h1>
      </div>

      {data.map((exp, index) => (
        <TimelineItem key={index} {...exp} />
      ))}
    </div>
  );
};

export default Experiences;

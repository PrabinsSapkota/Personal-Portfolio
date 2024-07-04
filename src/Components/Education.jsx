import './Education.css';

const Education = () => {
  const educationData = [
    {
      institution: 'Tribhuvan University(Advanced College of Engineering and Management)',
      degree: 'Bachelor in computer engineering',
      year: '(2020 - 2024)',
      description: 'Focused on software development, algorithms, and data structures. Graduated with honors.'
    },
    {
      institution: 'Trinity International College',
      degree: 'High School ',
      year: '(2017 - 2019)',
      description: 'Participated in the computer science club and won several coding competitions.'
    }
  ];

  return (
    <div className="education">
      <h2 className='text-2xl'>Education</h2>
      {educationData.map((edu, index) => (
        <div className="education-item" key={index}>
          <h3 className='font-bold'>{edu.institution}</h3>
          <p className="degree font-semibold">{edu.degree} <span className="year font-bold">{edu.year}</span></p>
          <p>{edu.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;

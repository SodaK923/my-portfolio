import React from 'react';

function Projects() {
  // Placeholder project data
  const projects = [
    {
      id: 1,
      title: 'Project Title 1',
      description: 'A brief description of Project 1. Highlight its purpose and features.',
      thumbnail: 'https://via.placeholder.com/300x200?text=Project+Thumbnail+1', // Placeholder image URL
      technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Project Title 2',
      description: 'A brief description of Project 2. Explain the problem it solves.',
      thumbnail: 'https://via.placeholder.com/300x200?text=Project+Thumbnail+2', // Placeholder image URL
      technologies: ['Vue.js', 'Firebase', 'Express.js'],
    },
    // Add more project objects as needed
  ];

  return (
    <div>
      <h1 id="projects" className="text-4xl font-bold text-left p-8">Projects</h1>
      {/* Responsive grid for project cards */}
      {/* On small screens (sm), 1 column; on medium (md), 2 columns; on large (lg), 3 columns */}
      <div className="container mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="border p-6 mb-6 rounded-lg shadow-lg">
            {/* Add image tag for thumbnail */}
            {project.thumbnail && (
              <img src={project.thumbnail} alt={`${project.title} Thumbnail`} className="w-full h-48 object-cover rounded-t-lg mb-4" />
            )}
            <h2 className="text-2xl font-semibold mb-4">{project.title}</h2> {/* Increased bottom margin for title */}
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-gray-200 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
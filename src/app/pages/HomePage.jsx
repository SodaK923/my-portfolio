import React from 'react';

function HomePage() {
  const skills = [
    'Java', 'JavaScript', 'HTML/CSS', 'SQL', 'Spring Boot', 'MyBatis', 'JPA', 'React',
    'Tailwind CSS', 'MySQL', 'Oracle', 'Supabase', 'Git', 'AWS EC2'
  ];

  return (
    <div>
      <main id="home" className="flex flex-col items-center justify-center min-h-screen p-8">
        
        {/* Profile Section */}
        <section className="flex flex-col items-center mb-12">
          {/* Placeholder for Profile Picture */}
          <div className="w-32 h-32 bg-gray-300 rounded-full mb-4 flex items-center justify-center text-gray-600">
            사진
          </div>
          
          <h1 className="text-4xl font-bold mb-2">
            [이름]
          </h1>
          <p className="text-xl text-center mb-4">
            [간단한 자기소개 문구]. [당신의 열정이나 목표에 대해 이야기해보세요.]
          </p>
          
          {/* Contact Info */}
          <div className="flex space-x-4 text-lg">
            <p>이메일: [이메일 주소]</p>
            <a href="[블로그 주소]" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              블로그
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section className="w-full max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-6">기술 스택</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}

export default HomePage;
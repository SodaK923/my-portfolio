import React from 'react';

function About() {
  return (
    <div className="about-container">
      <h1 className="text-4xl font-bold mt-8 mb-8 ml-8 text-gray-800">About</h1>

      <section id="about-me" className="mb-12 px-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          [여기에 자기소개 내용을 입력하세요.]
          안녕하세요! 저는 [이름]입니다. [간단한 자기소개 문구].
          [당신의 열정이나 목표에 대해 이야기해보세요.]
        </p>
      </section>

      <section id="skills" className="mb-12 px-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-600">
          <li className="bg-gray-100 p-3 rounded shadow-sm">[기술 1]</li>
          <li className="bg-gray-100 p-3 rounded shadow-sm">[기술 2]</li>
          <li className="bg-gray-100 p-3 rounded shadow-sm">[기술 3]</li>
          {/* 필요한 만큼 기술 항목을 추가하세요. */}
        </ul>
      </section>

      <section id="experience" className="mb-12 px-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Experience</h2>
        <ul className="space-y-6">
          <li className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold text-gray-800">[회사/프로젝트 이름]</h3>
            <p className="text-gray-600 mb-2">[기간] - [역할]</p>
            <p className="text-gray-700">[프로젝트 설명 또는 주요 기여 내용]</p>
          </li>
          {/* 필요한 만큼 경력 항목을 추가하세요. */}
        </ul>
      </section>
    </div>
  );
}

export default About;
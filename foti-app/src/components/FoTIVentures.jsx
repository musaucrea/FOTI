import React from 'react';

const FoTIVentures = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-[#1E3A8A] mb-6">FoTI Ventures Documentation</h1>
      <h2 className="text-3xl font-bold mb-4">Introduction</h2>
      <p className="mb-6">
        FoTI Ventures is a strategic initiative by the Foundations of Tourism Institute (FoTI) aimed at promoting sustainable tourism development through innovative projects and community engagement. 
        These ventures are designed to create positive social, economic, and environmental impacts while providing experiential learning opportunities for students and actively involving local communities.
      </p>

      <h2 className="text-3xl font-bold mb-4">Mission Statement</h2>
      <p className="mb-6">
        The mission of FoTI Ventures is to foster responsible tourism practices that empower local communities, enhance cultural heritage, and promote environmental stewardship. 
        Through various projects, FoTI Ventures seeks to create a sustainable model for tourism that benefits both travelers and the regions they visit.
      </p>

      <h2 className="text-3xl font-bold mb-4">Key Projects</h2>

      <div className="space-y-8">
        {/* FoTI Think Tank */}
        <div>
          <h3 className="text-2xl font-bold text-[#1E3A8A] mb-2">1. FoTI Think Tank</h3>
          <p className="mb-4">
            The FoTI Think Tank is a collaborative platform that brings together students, researchers, and industry experts to address challenges in the tourism sector and generate innovative solutions.
          </p>
          <h4 className="text-xl font-bold mb-2">Key Activities:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Conducting research on current trends and issues affecting the tourism industry.</li>
            <li>Organizing workshops and seminars to share knowledge and foster discussion among stakeholders.</li>
            <li>Developing strategic recommendations for policymakers and tourism organizations based on research findings.</li>
          </ul>
          <h4 className="text-xl font-bold mb-2">Role of Students:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Engage in research projects that contribute to the body of knowledge in tourism.</li>
            <li>Participate in discussions and brainstorming sessions to generate new ideas.</li>
            <li>Present research findings and proposals to industry leaders and stakeholders.</li>
          </ul>
          <h4 className="text-xl font-bold mb-2">Role of Communities:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Provide insights and feedback on local tourism issues and opportunities.</li>
            <li>Collaborate with students and researchers to validate findings and recommendations.</li>
            <li>Participate in workshops to learn about tourism trends and strategies.</li>
          </ul>
        </div>

        {/* FoTI Ecotourism Farm in Kilifi */}
        <div>
          <h3 className="text-2xl font-bold text-[#1E3A8A] mb-2">2. FoTI Ecotourism Farm in Kilifi</h3>
          <p className="mb-4">
            A pioneering project focused on creating a sustainable accommodation model that minimizes ecological footprints while offering unique experiences to tourists.
          </p>
          <h4 className="text-xl font-bold mb-2">Key Activities:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Developing a farm-to-table dining experience by growing organic food for guests.</li>
            <li>Implementing water recycling systems for efficient resource management.</li>
            <li>Partnering with suppliers to ensure recycling of used items like towels, bedding, and containers.</li>
          </ul>
          <h4 className="text-xl font-bold mb-2">Role of Students:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Involved in the design and implementation of sustainable farming practices.</li>
            <li>Participate in workshops focused on eco-friendly hospitality.</li>
            <li>Conduct research on sustainable tourism impacts in Kilifi.</li>
          </ul>
          <h4 className="text-xl font-bold mb-2">Role of Communities:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Engage in agricultural practices and provide local insights for farm operations.</li>
            <li>Collaborate in the development of tourism offerings that highlight local culture and history.</li>
            <li>Participate in training sessions to enhance their skills in hospitality and sustainable practices.</li>
          </ul>
        </div>

        {/* Hackathons for Innovation */}
        <div>
          <h3 className="text-2xl font-bold text-[#1E3A8A] mb-2">3. Hackathons for Innovation</h3>
          <p className="mb-4">
            FoTI Ventures organizes hackathons aimed at harnessing creativity and technology to address challenges in the tourism sector.
          </p>
          <h4 className="text-xl font-bold mb-2">Key Activities:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Hosting events where students and community members can collaborate to develop tech-driven solutions for sustainable tourism.</li>
            <li>Encouraging participants to create prototypes or apps that enhance the visitor experience while promoting local culture and conservation efforts.</li>
            <li>Providing mentorship from industry experts and access to resources to support project development.</li>
          </ul>
          <h4 className="text-xl font-bold mb-2">Role of Students:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Participate in brainstorming sessions and team collaborations to generate innovative ideas.</li>
            <li>Develop projects that focus on sustainability, cultural engagement, and technology integration in tourism.</li>
            <li>Present their solutions to a panel of judges and the community.</li>
          </ul>
          <h4 className="text-xl font-bold mb-2">Role of Communities:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Share local insights and challenges faced in the tourism industry, helping shape relevant solutions.</li>
            <li>Collaborate with students on projects that aim to improve community engagement in tourism.</li>
            <li>Participate in workshops to learn about technology and its applications in their context.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FoTIVentures;

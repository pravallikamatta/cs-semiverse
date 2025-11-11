const About = () => {
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-8 text-center">
          About CS-semHUB
        </h1>
        
        <div className="space-y-6 text-foreground leading-relaxed">
          <p className="text-lg">
            CS-semHUB is a student-friendly platform created to simplify Computer Science learning.
            Our main goal is to make your academic journey smoother and more organized.
            Whether you're just starting your first semester or diving into advanced subjects, CS-semHUB helps you find everything you need in one place.
          </p>

          <div className="bg-card border rounded-lg p-6 space-y-4">
            <h2 className="text-2xl font-semibold mb-4">What You Can Explore</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-2xl">📘</span>
                <span>Complete and updated <strong>syllabus</strong> for every semester</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📝</span>
                <span>Well-organized <strong>notes and study materials</strong> for each subject</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📂</span>
                <span><strong>Important questions</strong> and <strong>previous year papers</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">💻</span>
                <span><strong>Lab programs</strong>, code examples, and projects</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <span>Practical <strong>study strategies</strong> to score better and learn smarter</span>
              </li>
            </ul>
          </div>

          <p className="text-lg">
            Our mission is simple — to make Computer Science learning efficient, focused, and accessible for every student.
            No distractions, no unnecessary details — just the exact content you need to understand your subjects and perform your best.
          </p>

          <p className="text-lg">
            The design of CS-semHUB keeps it minimal yet professional, ensuring that students can focus on learning rather than navigating.
            This platform evolves with you — track your progress, access personalized study paths, and continue improving every semester.
          </p>

          <div className="bg-gradient-primary text-primary-foreground rounded-lg p-6 mt-8 text-center">
            <h3 className="text-2xl font-semibold mb-2">Ready to Begin?</h3>
            <p className="text-lg opacity-90">Start exploring your semester resources today!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

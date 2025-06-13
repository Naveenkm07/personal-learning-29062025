import React, { useState } from 'react';

const CoursesSection = () => {
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterDifficulty, setFilterDifficulty] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courseData = {
    categories: [
      { id: 'all', name: 'All Categories' },
      { id: 'ai-ml', name: 'AI & Machine Learning' },
      { id: 'web-development', name: 'Web Development' },
      { id: 'data-science', name: 'Data Science' },
      { id: 'cloud-devops', name: 'Cloud & DevOps' },
      { id: 'mobile-dev', name: 'Mobile Development' },
    ],
    difficulties: [
      { id: 'all', name: 'All Difficulties' },
      { id: 'beginner', name: 'Beginner' },
      { id: 'intermediate', name: 'Intermediate' },
      { id: 'advanced', name: 'Advanced' },
    ],
    courses: [
      {
        id: 1,
        title: 'Generative AI Fundamentals',
        category: 'ai-ml',
        difficulty: 'beginner',
        duration: '4 weeks',
        lessons: 20,
        description: 'An introductory course to the exciting world of Generative AI, covering basic concepts, models like GANs and Transformers, and practical applications.',
        details: 'This course covers neural networks, autoencoders, GANs (Generative Adversarial Networks), and an introduction to large language models (LLMs) and transformer architectures. Includes hands-on labs with Python and TensorFlow/PyTorch.',
        image: 'https://via.placeholder.com/400x250/21808D/FFFFFF?text=Generative+AI',
      },
      {
        id: 2,
        title: 'Advanced Python for Data Science',
        category: 'data-science',
        difficulty: 'intermediate',
        duration: '6 weeks',
        lessons: 30,
        description: 'Deep dive into Python\'s capabilities for data manipulation, analysis, and visualization. Master libraries like Pandas, NumPy, and Matplotlib.',
        details: 'Learn advanced data cleaning with Pandas, efficient numerical computing with NumPy, and powerful data visualization with Matplotlib and Seaborn. Covers statistical analysis, time series data, and an introduction to machine learning prep.',
        image: 'https://via.placeholder.com/400x250/32B8C6/FFFFFF?text=Python+DS',
      },
      {
        id: 3,
        title: 'React.js for Frontend Development',
        category: 'web-development',
        difficulty: 'beginner',
        duration: '5 weeks',
        lessons: 25,
        description: 'Build modern, interactive user interfaces with React.js. Learn component-based architecture, state management, and API integration.',
        details: 'Covers React fundamentals, JSX, props, state, hooks (useState, useEffect, useContext), routing with React Router, and fetching data from RESTful APIs. Project-based learning to build a complete web application.',
        image: 'https://via.placeholder.com/400x250/1F2121/FFFFFF?text=ReactJS',
      },
      {
        id: 4,
        title: 'Cloud Native DevOps with Kubernetes',
        category: 'cloud-devops',
        difficulty: 'advanced',
        duration: '8 weeks',
        lessons: 40,
        description: 'Master container orchestration with Kubernetes, CI/CD pipelines, and cloud-native application deployment on AWS, Azure, or GCP.',
        details: 'This advanced course focuses on Docker, Kubernetes deployments, services, ingress, and persistent storage. Implement CI/CD with Jenkins/GitLab CI, monitor with Prometheus/Grafana, and explore serverless architectures. Hands-on labs with cloud platforms.',
        image: 'https://via.placeholder.com/400x250/626C71/FFFFFF?text=Kubernetes',
      },
      {
        id: 5,
        title: 'Mobile App Development with Flutter',
        category: 'mobile-dev',
        difficulty: 'intermediate',
        duration: '7 weeks',
        lessons: 35,
        description: 'Develop beautiful, natively compiled applications for mobile, web, and desktop from a single codebase using Flutter and Dart.',
        details: 'Learn Dart programming, Flutter widgets, state management (Provider, Bloc), navigation, working with local databases, and consuming REST APIs. Build multiple real-world applications throughout the course.',
        image: 'https://via.placeholder.com/400x250/945240/FFFFFF?text=Flutter',
      },
    ],
  };

  const filteredCourses = courseData.courses.filter((course) => {
    const matchesCategory = filterCategory === 'all' || course.category === filterCategory;
    const matchesDifficulty = filterDifficulty === 'all' || course.difficulty === filterDifficulty;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.details.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const handleBackToList = () => {
    setSelectedCourse(null);
  };

  return (
    <section className="content-section card" id="coursesSection">
      <div className="card__body">
        <div className="courses-header">
          <h1>Our Courses</h1>
          <p>Structured learning paths designed to help you master in-demand tech skills and advance your career.</p>
        </div>

        {!selectedCourse ? (
          <div className="course-list-view">
            <div className="course-filters">
              <div className="filter-group">
                <label htmlFor="category-filter">Filter by Category:</label>
                <select
                  id="category-filter"
                  className="form-control"
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                >
                  {courseData.categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label htmlFor="difficulty-filter">Filter by Difficulty:</label>
                <select
                  id="difficulty-filter"
                  className="form-control"
                  value={filterDifficulty}
                  onChange={(e) => setFilterDifficulty(e.target.value)}
                >
                  {courseData.difficulties.map((difficulty) => (
                    <option key={difficulty.id} value={difficulty.id}>{difficulty.name}</option>
                  ))}
                </select>
              </div>

              <div className="search-group">
                <label htmlFor="course-search">Search Courses:</label>
                <div className="search-input-wrapper">
                  <input
                    type="text"
                    id="course-search"
                    className="form-control"
                    placeholder="Search by title or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <i className="fas fa-search"></i>
                </div>
              </div>
            </div>

            <div className="course-grid">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <div className="course-card" key={course.id} onClick={() => handleCourseClick(course)}>
                    <div className="card__body">
                      <img src={course.image} alt={course.title} className="course-card-image" />
                      <div className="course-card-content">
                        <h3>{course.title}</h3>
                        <p className="course-category">Category: {courseData.categories.find(c => c.id === course.category)?.name}</p>
                        <p className="course-meta">
                          <span><i className="fas fa-clock"></i> {course.duration}</span>
                          <span><i className="fas fa-book-open"></i> {course.lessons} Lessons</span>
                        </p>
                        <p className="course-difficulty difficulty-badge {course.difficulty}">{course.difficulty}</p>
                        <button className="btn btn--sm btn--primary view-course-btn">
                          <i className="fas fa-info-circle"></i> View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-courses-found">
                  <i className="fas fa-book-open"></i>
                  <h3>No Courses Found</h3>
                  <p>Try adjusting your filters or search terms.</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="course-detail-view">
            <button className="btn btn--outline back-button" onClick={handleBackToList}>
              <i className="fas fa-arrow-left"></i> Back to Courses
            </button>
            <div className="detail-header">
              <img src={selectedCourse.image} alt={selectedCourse.title} className="course-detail-image" />
              <div className="course-detail-info">
                <h2>{selectedCourse.title}</h2>
                <p className="course-detail-category">Category: {courseData.categories.find(c => c.id === selectedCourse.category)?.name}</p>
                <p className="course-detail-meta">
                  <span><i className="fas fa-clock"></i> {selectedCourse.duration}</span>
                  <span><i className="fas fa-book-open"></i> {selectedCourse.lessons} Lessons</span>
                </p>
                <p className="course-detail-difficulty difficulty-badge {selectedCourse.difficulty}">{selectedCourse.difficulty}</p>
              </div>
            </div>
            <div className="course-detail-content">
              <h3>Description</h3>
              <p>{selectedCourse.description}</p>
              <h3>What You\'ll Learn</h3>
              <p>{selectedCourse.details}</p>
              <div className="course-actions">
                <button className="btn btn--primary btn--lg">
                  <i className="fas fa-play-circle"></i> Enroll Now
                </button>
                <button className="btn btn--secondary btn--lg">
                  <i className="fas fa-share-alt"></i> Share Course
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesSection; 
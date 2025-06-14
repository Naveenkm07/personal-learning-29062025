import React, { useState, useEffect } from 'react';

const IndustryRealityCheckSection = () => {
  const [activeTab, setActiveTab] = useState('trends');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInsight, setSelectedInsight] = useState(null);
  const [quizResults, setQuizResults] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const insightsData = {
    trends: [
      {
        id: 1,
        title: "The Rise of AI in Software Development",
        summary: "Explore how AI is transforming coding, testing, and deployment processes.",
        content: "Artificial intelligence is rapidly becoming an indispensable tool in software development. From AI-powered code completion and debugging tools to automated testing and deployment pipelines, AI is enhancing efficiency and accuracy across the entire software lifecycle. Developers are leveraging machine learning models for predictive analytics, anomaly detection in production, and even generating boiler-plate code. This trend necessitates developers to understand AI fundamentals and adapt to new AI-driven workflows.",
        tags: ["AI", "Trends", "Automation"],
        image: "https://via.placeholder.com/400x200/0984e3/ffffff?text=AI+Dev"
      },
      {
        id: 2,
        title: "Web3 and Blockchain: Beyond Cryptocurrencies",
        summary: "Dive into decentralized applications, NFTs, and the future of the internet.",
        content: "Web3, built on blockchain technology, promises a decentralized internet where users have more control over their data and digital assets. Beyond cryptocurrencies, Web3 encompasses decentralized applications (dApps), non-fungible tokens (NFTs), and decentralized autonomous organizations (DAOs). Developers are increasingly exploring Solidity, Rust, and Go for building on platforms like Ethereum, Solana, and Polkadot. Understanding smart contracts and distributed ledger technology is becoming crucial for innovation in this space.",
        tags: ["Web3", "Blockchain", "Decentralization"],
        image: "https://via.placeholder.com/400x200/6c5ce7/ffffff?text=Web3"
      },
      {
        id: 3,
        title: "Edge Computing: Processing Power at the Source",
        summary: "Learn about distributed computing and its impact on IoT and real-time data.",
        content: "Edge computing brings computation and data storage closer to the sources of data, reducing latency and bandwidth usage. This paradigm is critical for IoT devices, autonomous vehicles, and real-time analytics. As more data is generated at the 'edge' of networks, the demand for developers skilled in optimizing applications for resource-constrained environments and handling distributed systems grows. Technologies like Kubernetes, serverless functions, and specialized edge hardware are at the forefront.",
        tags: ["Edge Computing", "IoT", "Cloud"],
        image: "https://via.placeholder.com/400x200/fdcb6e/2d3436?text=Edge+Computing"
      }
    ],
    caseStudies: [
      {
        id: 1,
        title: "Netflix's Microservices Journey",
        summary: "How Netflix scaled its streaming platform using a microservices architecture.",
        content: "Netflix's transition from a monolithic application to a microservices architecture is a classic case study in distributed systems. Facing immense scaling challenges, they broke down their large application into hundreds of smaller, independently deployable services. This approach allowed them to achieve high availability, fault tolerance, and rapid development cycles. Key takeaways include the importance of robust communication mechanisms, distributed data management, and comprehensive monitoring in a microservices environment.",
        tags: ["Microservices", "Scalability", "Netflix"],
        image: "https://via.placeholder.com/400x200/e17055/ffffff?text=Netflix"
      },
      {
        id: 2,
        title: "Airbnb's Design System Evolution",
        summary: "A look at how Airbnb built a cohesive user experience across platforms.",
        content: "Airbnb's experience in building a robust design system, 'DLS' (Design Language System), highlights the challenges and benefits of creating consistency across diverse platforms and teams. Their journey involved standardizing components, documentation, and design principles, which significantly improved development speed and brand cohesion. This case study emphasizes the value of collaboration between designers and developers, the need for clear guidelines, and iterative development in building effective design systems.",
        tags: ["Design System", "UX/UI", "Airbnb"],
        image: "https://via.placeholder.com/400x200/00b894/ffffff?text=Airbnb"
      }
    ],
    expertInterviews: [
      {
        id: 1,
        title: "Interview with a Senior DevOps Engineer",
        summary: "Insights into the day-to-day life and challenges of a DevOps professional.",
        content: "In this exclusive interview, [Expert Name], a Senior DevOps Engineer at [Company Name], shares their experiences with implementing CI/CD pipelines, managing cloud infrastructure, and fostering a culture of collaboration. They discuss the importance of automation, observability, and security in modern software delivery. Key topics include the adoption of GitOps, serverless architectures, and the continuous learning required to stay ahead in the rapidly evolving DevOps landscape.",
        tags: ["DevOps", "Interview", "Career"],
        image: "https://via.placeholder.com/400x200/0984e3/ffffff?text=DevOps+Expert"
      },
      {
        id: 2,
        title: "A Day in the Life of a Machine Learning Engineer",
        summary: "What it's like to build and deploy ML models in production.",
        content: "Join [Expert Name], a Machine Learning Engineer at [Company Name], as they walk us through their typical day, from data preprocessing and model training to deployment and monitoring of AI solutions. They delve into the challenges of ensuring model fairness, interpretability, and performance in real-world scenarios. The interview highlights the blend of coding, statistical analysis, and domain expertise required for a successful career in machine learning.",
        tags: ["Machine Learning", "AI", "Interview"],
        image: "https://via.placeholder.com/400x200/6c5ce7/ffffff?text=ML+Engineer"
      }
    ],
    quizzes: [
      {
        id: 1,
        title: "AI in Software Development Quiz",
        description: "Test your knowledge on the impact of AI on software engineering practices.",
        questions: [
          {
            id: 1,
            question: "Which of these is NOT a common application of AI in software development?",
            options: [
              "Automated code generation",
              "Predictive analytics for system failures",
              "Manual regression testing",
              "Intelligent debugging assistance"
            ],
            correctAnswer: "Manual regression testing"
          },
          {
            id: 2,
            question: "What is a primary benefit of AI-powered code refactoring tools?",
            options: [
              "Increased code complexity",
              "Automated bug introduction",
              "Improved code quality and maintainability",
              "Reduced team collaboration"
            ],
            correctAnswer: "Improved code quality and maintainability"
          }
        ]
      },
      {
        id: 2,
        title: "Web3 Fundamentals Quiz",
        description: "Check your understanding of decentralized technologies and their components.",
        questions: [
          {
            id: 1,
            question: "Which term best describes a decentralized application?",
            options: [
              "Centralized database",
              "DApp",
              "Monolithic architecture",
              "Cloud-hosted service"
            ],
            correctAnswer: "DApp"
          },
          {
            id: 2,
            question: "What is the primary technology underlying Web3?",
            options: [
              "HTTP/2",
              "Blockchain",
              "SQL Databases",
              "NoSQL Databases"
            ],
            correctAnswer: "Blockchain"
          }
        ]
      }
    ]
  };

  const filteredInsights = insightsData[activeTab]?.filter(insight =>
    insight.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    insight.summary.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const handleQuizChange = (quizId, questionId, selectedOption) => {
    setQuizResults(prev => ({
      ...prev,
      [quizId]: {
        ...(prev[quizId] || {}),
        [questionId]: selectedOption
      }
    }));
  };

  const handleSubmitQuiz = (quiz) => {
    const results = {};
    let correctCount = 0;
    quiz.questions.forEach(q => {
      const userAnswer = quizResults[quiz.id]?.[q.id];
      const isCorrect = userAnswer === q.correctAnswer;
      results[q.id] = { userAnswer, isCorrect };
      if (isCorrect) correctCount++;
    });
    setQuizResults(prev => ({
      ...prev,
      [quiz.id]: { ...prev[quiz.id], submitted: true, score: correctCount, total: quiz.questions.length }
    }));
    setQuizSubmitted(true);
  };

  const getQuizScore = (quizId) => {
    return quizResults[quizId]?.score !== undefined
      ? `${quizResults[quizId].score} / ${quizResults[quizId].total}`
      : 'Not attempted';
  };

  return (
    <section className="content-section card" id="industryRealityCheckSection">
      <div className="card__body">
        <div className="reality-check-header">
          <h1>Industry Reality Check</h1>
          <p>Stay updated with the latest tech trends, industry insights, and real-world case studies.</p>
        </div>

        <div className="reality-check-tabs">
          <button
            className={`tab-button ${activeTab === 'trends' ? 'active' : ''}`}
            onClick={() => { setActiveTab('trends'); setSelectedInsight(null); setQuizSubmitted(false); }}
          >
            <i className="fas fa-chart-line"></i>
            Trends
          </button>
          <button
            className={`tab-button ${activeTab === 'caseStudies' ? 'active' : ''}`}
            onClick={() => { setActiveTab('caseStudies'); setSelectedInsight(null); setQuizSubmitted(false); }}
          >
            <i className="fas fa-lightbulb"></i>
            Case Studies
          </button>
          <button
            className={`tab-button ${activeTab === 'expertInterviews' ? 'active' : ''}`}
            onClick={() => { setActiveTab('expertInterviews'); setSelectedInsight(null); setQuizSubmitted(false); }}
          >
            <i className="fas fa-user-tie"></i>
            Expert Interviews
          </button>
          <button
            className={`tab-button ${activeTab === 'quizzes' ? 'active' : ''}`}
            onClick={() => { setActiveTab('quizzes'); setSelectedInsight(null); setQuizSubmitted(false); }}
          >
            <i className="fas fa-question-circle"></i>
            Quizzes
          </button>
        </div>

        <div className="reality-check-content">
          {selectedInsight ? (
            <div className="insight-detail">
              <button className="back-button" onClick={() => setSelectedInsight(null)}>
                <i className="fas fa-arrow-left"></i> Back to all insights
              </button>
              <h2>{selectedInsight.title}</h2>
              <div className="insight-meta">
                {selectedInsight.tags?.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              {selectedInsight.image && <img src={selectedInsight.image} alt={selectedInsight.title} className="insight-image" />}
              <p className="insight-content-text">{selectedInsight.content}</p>
            </div>
          ) : (
            <>
              <div className="search-bar">
                <input
                  type="text"
                  placeholder={`Search ${activeTab}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <i className="fas fa-search"></i>
              </div>

              {isLoading ? (
                <div className="loading-indicator">
                  <div className="spinner"></div>
                  <p>Loading insights...</p>
                </div>
              ) : filteredInsights.length > 0 ? (
                <div className="insight-grid">
                  {filteredInsights.map(insight => (
                    <div key={insight.id} className="insight-card" onClick={() => setSelectedInsight(insight)}>
                      <div className="card__body">
                        {insight.image && <img src={insight.image} alt={insight.title} className="insight-card-image" />}
                        <h4>{insight.title}</h4>
                        <p>{insight.summary}</p>
                        <div className="insight-tags">
                          {insight.tags?.map(tag => (
                            <span key={tag} className="tag">{tag}</span>
                          ))}
                        </div>
                        {activeTab === 'quizzes' && (
                          <div className="quiz-status">
                            Current Score: <span className="score-text">{getQuizScore(insight.id)}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : activeTab === 'quizzes' ? (
                <div className="no-content">
                  <i className="fas fa-exclamation-circle"></i>
                  <p>No quizzes found matching your search. Try a different term or check back later!</p>
                </div>
              ) : (
                <div className="no-content">
                  <i className="fas fa-exclamation-circle"></i>
                  <p>No insights found matching your search. Try a different term or check back later!</p>
                </div>
              )}

              {activeTab === 'quizzes' && filteredInsights.length > 0 && (
                <div className="quizzes-section">
                  {filteredInsights.map(quiz => (
                    <div key={quiz.id} className="quiz-card">
                      <div className="card__body">
                        <h2>{quiz.title}</h2>
                        <p>{quiz.description}</p>
                        {!quizResults[quiz.id]?.submitted ? (
                          <form onSubmit={(e) => { e.preventDefault(); handleSubmitQuiz(quiz); }}>
                            {quiz.questions.map(q => (
                              <div key={q.id} className="quiz-question">
                                <h4>{q.question}</h4>
                                <div className="options-grid">
                                  {q.options.map(option => (
                                    <label key={option} className="option-label">
                                      <input
                                        type="radio"
                                        name={`question-${quiz.id}-${q.id}`}
                                        value={option}
                                        checked={quizResults[quiz.id]?.[q.id] === option}
                                        onChange={() => handleQuizChange(quiz.id, q.id, option)}
                                      />
                                      <span>{option}</span>
                                    </label>
                                  ))}
                                </div>
                              </div>
                            ))}
                            <button type="submit" className="btn btn--primary" disabled={!Object.keys(quizResults[quiz.id] || {}).length}>
                              Submit Quiz
                            </button>
                          </form>
                        ) : (
                          <div className="quiz-result-summary">
                            <h3>Your Score: {quizResults[quiz.id].score} / {quizResults[quiz.id].total}</h3>
                            <div className="quiz-answers">
                              {quiz.questions.map(q => (
                                <div key={q.id} className="quiz-question-result">
                                  <h4>{q.question}</h4>
                                  <p>
                                    Your Answer: <span className={quizResults[quiz.id]?.[q.id] === q.correctAnswer ? 'correct-answer' : 'wrong-answer'}>
                                      {quizResults[quiz.id]?.[q.id] || 'Not answered'}
                                    </span>
                                  </p>
                                  {quizResults[quiz.id]?.[q.id] !== q.correctAnswer && (
                                    <p>Correct Answer: <span className="correct-answer">{q.correctAnswer}</span></p>
                                  )}
                                </div>
                              ))}
                            </div>
                            <button 
                              className="btn btn--secondary"
                              onClick={() => { setQuizResults(prev => { const newResults = { ...prev }; delete newResults[quiz.id]; return newResults; }); setQuizSubmitted(false); }}
                            >
                              Retake Quiz
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default IndustryRealityCheckSection; 
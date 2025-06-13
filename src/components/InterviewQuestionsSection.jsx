import React, { useState, useEffect } from 'react';

const InterviewQuestionsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showSolution, setShowSolution] = useState(false);

  const interviewData = {
    categories: [
      { id: 'all', name: 'All Questions', icon: 'th-list' },
      { id: 'behavioral', name: 'Behavioral', icon: 'user-friends' },
      { id: 'data-structures', name: 'Data Structures', icon: 'sitemap' },
      { id: 'algorithms', name: 'Algorithms', icon: 'code' },
      { id: 'system-design', name: 'System Design', icon: 'cloud' },
      { id: 'frontend', name: 'Frontend', icon: 'paint-brush' },
      { id: 'backend', name: 'Backend', icon: 'server' },
    ],
    questions: [
      {
        id: 1,
        category: 'behavioral',
        difficulty: 'Easy',
        title: "Tell me about yourself.",
        question: "This is often the first question in an interview. How do you summarize your professional journey and aspirations effectively?",
        hint: "Focus on your past, present, and future. Keep it concise and relevant to the job.",
        solution: "Start with your background and current role, then highlight key experiences relevant to the job, and finally, express your career goals and how they align with the position and company.",
        tags: ["Behavioral", "Introduction", "General"],
      },
      {
        id: 2,
        category: 'behavioral',
        difficulty: 'Medium',
        title: "Why do you want to work for us?",
        question: "What motivates you to join this specific company and team?",
        hint: "Research the company's mission, values, recent projects, and culture. Connect them to your aspirations.",
        solution: "Demonstrate your research about the company. Talk about specific projects, values, or culture aspects that appeal to you. Explain how your skills and career goals align with their mission.",
        tags: ["Behavioral", "Motivation", "Company Research"],
      },
      {
        id: 3,
        category: 'data-structures',
        difficulty: 'Medium',
        title: "Explain Hash Maps.",
        question: "What is a hash map, how does it work, and what are its time complexities for common operations?",
        hint: "Think about key-value pairs, hashing functions, and collision resolution.",
        solution: "A hash map (or hash table) stores key-value pairs. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found. \n\nTime Complexities (Average Case):\n- Insertion: O(1)\n- Deletion: O(1)\n- Search: O(1)\n\nWorst Case (due to collisions): O(n)",
        tags: ["Data Structures", "Hash Map", "Theory"],
      },
      {
        id: 4,
        category: 'algorithms',
        difficulty: 'Hard',
        title: "Implement QuickSort.",
        question: "Write a function to implement the QuickSort algorithm. Analyze its time and space complexity.",
        hint: "Choose a pivot, partition the array, and recursively sort sub-arrays.",
        solution: `function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];
  const equal = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      equal.push(arr[i]);
    }
  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
}

// Time Complexity: Average O(n log n), Worst O(n^2)
// Space Complexity: O(log n) (for recursion stack) on average, O(n) worst case`,
        tags: ["Algorithms", "Sorting", "Divide and Conquer"],
      },
      {
        id: 5,
        category: 'system-design',
        difficulty: 'Hard',
        title: "Design a URL Shortening Service.",
        question: "How would you design a service like Bitly or TinyURL? Consider scalability, availability, and reliability.",
        hint: "Think about core components: URL generation, storage, redirection, and handling collisions.",
        solution: "Key components include: 1. Hash Function (to generate short codes), 2. Database (to store mappings), 3. Redirect Service (for forwarding), 4. Custom URL Handling. Considerations: Collision resolution, custom URLs, analytics, high availability, scalability, API design. Use consistent hashing, sharding, and caching strategies.",
        tags: ["System Design", "Scalability", "Distributed Systems"],
      },
      {
        id: 6,
        category: 'frontend',
        difficulty: 'Medium',
        title: "Explain Virtual DOM.",
        question: "What is the Virtual DOM and how does React use it for performance optimization?",
        hint: "It's a lightweight copy of the actual DOM. Think about reconciliation.",
        solution: "The Virtual DOM is a lightweight, in-memory representation of the actual DOM. When state changes in a React component, React first updates its Virtual DOM. Then, it compares the current Virtual DOM with the previous one (a process called reconciliation) to identify only the minimal changes needed. Finally, it batches these changes and updates only the necessary parts of the real DOM, significantly improving performance by minimizing direct DOM manipulations, which are expensive.",
        tags: ["Frontend", "React", "Performance", "DOM"],
      },
      {
        id: 7,
        category: 'backend',
        difficulty: 'Medium',
        title: "REST vs. GraphQL",
        question: "Compare and contrast REST and GraphQL for API design.",
        hint: "Consider data fetching, endpoints, and client needs.",
        solution: "**REST (Representational State Transfer):** Resource-based, multiple endpoints (e.g., /users, /products), over-fetching/under-fetching data can be an issue. \n\n**GraphQL:** Query language for APIs, single endpoint, clients request only the data they need, reducing network payload. More complex server-side setup but offers flexibility to the client.",
        tags: ["Backend", "API", "REST", "GraphQL"],
      },
    ],
  };

  const filteredQuestions = interviewData.questions.filter((q) => {
    const matchesCategory = activeCategory === 'all' || q.category === activeCategory;
    const matchesSearch = q.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          q.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    setShowSolution(false); // Reset solution visibility when new question is selected
  };

  return (
    <section className="content-section card" id="interviewQuestionsSection">
      <div className="card__body">
        <div className="interview-header">
          <h1>Interview Preparation</h1>
          <p>Practice common interview questions by category and difficulty. Sharpen your skills to ace your next technical interview.</p>
        </div>

        <div className="interview-container">
          <div className="interview-sidebar">
            <div className="category-filter">
              <h3>Categories</h3>
              <div className="category-list">
                {interviewData.categories.map((category) => (
                  <button
                    key={category.id}
                    className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => { setActiveCategory(category.id); setSearchTerm(''); setSelectedQuestion(null); }}
                  >
                    <i className={`fas fa-${category.icon}`}></i>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="question-search">
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <i className="fas fa-search"></i>
            </div>

            <div className="question-list">
              <h3>Questions ({filteredQuestions.length})</h3>
              {filteredQuestions.length > 0 ? (
                <ul>
                  {filteredQuestions.map((question) => (
                    <li
                      key={question.id}
                      className={`question-item ${selectedQuestion?.id === question.id ? 'active' : ''}`}
                      onClick={() => handleQuestionClick(question)}
                    >
                      <h4>{question.title}</h4>
                      <span className={`difficulty-badge ${question.difficulty.toLowerCase().replace(/\s/g, '')}`}>
                        {question.difficulty}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="no-questions">
                  <i className="fas fa-frown"></i>
                  <p>No questions found in this category or matching your search.</p>
                </div>
              )}
            </div>
          </div>

          <div className="interview-main">
            {selectedQuestion ? (
              <div className="question-detail">
                <div className="detail-header">
                  <h2>{selectedQuestion.title}</h2>
                  <span className={`difficulty-badge ${selectedQuestion.difficulty.toLowerCase().replace(/\s/g, '')}`}>
                    {selectedQuestion.difficulty}
                  </span>
                </div>
                <p className="question-text">{selectedQuestion.question}</p>
                
                <div className="detail-actions">
                  <button 
                    className="btn btn--secondary"
                    onClick={() => setShowSolution(prev => !prev)}
                  >
                    <i className={`fas ${showSolution ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    {showSolution ? 'Hide Solution' : 'Show Solution'}
                  </button>
                  <button 
                    className="btn btn--tertiary"
                    onClick={() => navigator.clipboard.writeText(selectedQuestion.question)}
                  >
                    <i className="fas fa-copy"></i>
                    Copy Question
                  </button>
                </div>

                {showSolution && (
                  <div className="solution-box">
                    <h3>Solution:</h3>
                    <pre>{selectedQuestion.solution}</pre>
                  </div>
                )}

                <div className="hint-box">
                  <h3>Hint:</h3>
                  <p>{selectedQuestion.hint}</p>
                </div>

                <div className="question-tags">
                  {selectedQuestion.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="no-question-selected">
                <i className="fas fa-question-circle"></i>
                <h3>Select a Question</h3>
                <p>Choose an interview question from the sidebar to start practicing.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewQuestionsSection; 
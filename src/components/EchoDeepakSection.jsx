import React, { useState, useEffect, useRef } from 'react';

const EchoDeepakSection = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [performanceMetrics, setPerformanceMetrics] = useState({
    responseTime: 'N/A',
    accuracy: 'N/A',
    uptime: 'N/A'
  });
  const [activeCategory, setActiveCategory] = useState('general');
  const chatContainerRef = useRef(null);

  const categories = [
    { id: 'general', name: 'General Coding' },
    { id: 'frontend', name: 'Frontend Dev' },
    { id: 'backend', name: 'Backend Dev' },
    { id: 'devops', name: 'DevOps & Cloud' },
    { id: 'algorithms', name: 'Algorithms' },
    { id: 'interview-prep', name: 'Interview Prep' },
  ];

  const simulatedResponses = {
    'general': [
      "That's a great general coding question! What specific language or concept are you thinking of?",
      "I can help with that. Can you provide more details on the problem?",
      "General coding queries are my specialty. How can I assist you today?",
    ],
    'frontend': [
      "For frontend, are you working with React, Vue, Angular, or something else?",
      "Frontend development is vast! Tell me more about your CSS, JavaScript, or UI challenge.",
      "I'm ready to assist with your HTML, CSS, or JavaScript questions. What's on your mind?",
    ],
    'backend': [
      "Backend development often involves databases, APIs, and server logic. What specific area are you exploring?",
      "Node.js, Python, Java, or Go? Which backend technology are you using?",
      "I can help debug server-side issues or optimize database queries. What's the scenario?",
    ],
    'devops': [
      "DevOps and cloud are critical. Are you dealing with CI/CD, Docker, Kubernetes, or a specific cloud provider like AWS/Azure/GCP?",
      "Automating infrastructure can be tricky. What part of your deployment pipeline needs attention?",
      "Looking for help with containerization or cloud resource management? I'm here to assist.",
    ],
    'algorithms': [
      "Algorithms are fundamental! Are you looking for help with sorting, searching, graph traversal, or dynamic programming?",
      "Let's break down that algorithm. Can you explain the problem and your current approach?",
      "I enjoy complex algorithm challenges. What specific algorithm is giving you trouble?",
    ],
    'interview-prep': [
      "Interview preparation is key. Are you practicing behavioral questions, coding challenges, or system design?",
      "Tell me about the type of interview question you're preparing for. I can simulate scenarios or provide tips.",
      "I can offer mock interview questions or strategies for technical interviews. What's your focus area?",
    ],
    'default': [
      "I'm not sure I understood that. Could you please rephrase your question?",
      "My apologies, I need more clarity. Can you give me an example or more context?",
      "Interesting query! Let me think about that. In the meantime, feel free to ask a more specific question.",
    ]
  };

  const quickQuestions = [
    'How do I center a div?',
    'Explain Promises in JavaScript.',
    'What is a microservice architecture?',
    'Best way to learn Python?',
    'Difference between SQL and NoSQL?',
    'What is Big O notation?',
  ];

  useEffect(() => {
    // Simulate initial greeting from Deepak
    setTimeout(() => {
      setMessages([{ sender: 'deepak', text: "Hello! I'm EchoDeepak, your AI coding mentor. How can I assist you today?" }]);
    }, 500);

    // Simulate updating performance metrics
    const interval = setInterval(() => {
      setPerformanceMetrics({
        responseTime: `${(Math.random() * 0.1 + 0.1).toFixed(2)}s`,
        accuracy: `${(90 + Math.random() * 10).toFixed(1)}%`,
        uptime: `99.${(90 + Math.random() * 9).toFixed(1)}%`
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Scroll to bottom of chat when new messages arrive
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (messageText = inputMessage) => {
    if (messageText.trim() === '') return;

    const newUserMessage = { sender: 'user', text: messageText };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response after a delay
    setTimeout(() => {
      const responseOptions = simulatedResponses[activeCategory] || simulatedResponses['default'];
      const randomResponse = responseOptions[Math.floor(Math.random() * responseOptions.length)];

      setMessages((prevMessages) => [...prevMessages, { sender: 'deepak', text: randomResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestionClick = (question) => {
    handleSendMessage(question);
  };

  return (
    <section className="content-section card" id="echoDeepakSection">
      <div className="card__body echo-deepak-container">
        <div className="echo-deepak-header">
          <h1>EchoDeepak - AI Assistant</h1>
          <p>Your personal AI coding mentor for instant help, feedback, and learning support.</p>
        </div>

        <div className="ai-chat-interface">
          <div className="chat-sidebar">
            <div className="sidebar-section category-selection">
              <h3>Categories</h3>
              <div className="category-list">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`category-item ${activeCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="sidebar-section quick-questions">
              <h3>Quick Questions</h3>
              <div className="question-list">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    className="quick-question-item"
                    onClick={() => handleQuickQuestionClick(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
            <div className="sidebar-section performance-metrics">
              <h3>Performance Metrics</h3>
              <div className="metrics-list">
                <p>Response Time: <span>{performanceMetrics.responseTime}</span></p>
                <p>Accuracy: <span>{performanceMetrics.accuracy}</span></p>
                <p>Uptime: <span>{performanceMetrics.uptime}</span></p>
              </div>
            </div>
          </div>

          <div className="chat-main">
            <div className="chat-messages" ref={chatContainerRef}>
              {messages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.sender}`}>
                  <div className="message-avatar">
                    <i className={`fas ${msg.sender === 'user' ? 'fa-user-circle' : 'fa-robot'}`}></i>
                  </div>
                  <div className="message-bubble">
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="chat-message deepak typing-indicator">
                  <div className="message-avatar">
                    <i className="fas fa-robot"></i>
                  </div>
                  <div className="message-bubble">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>
              )}
            </div>
            <div className="chat-input">
              <textarea
                placeholder="Ask EchoDeepak anything..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                rows="1"
              ></textarea>
              <button className="btn btn--primary" onClick={() => handleSendMessage()}>
                <i className="fas fa-paper-plane"></i> Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EchoDeepakSection; 
import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.scss';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm here to help you learn more about Sughosh Dixit. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = {
    greeting: [
      "Hello! 👋 Thanks for visiting my portfolio!",
      "Hi there! Welcome to my website! 😊",
      "Hey! Great to meet you! 🎉"
    ],
    about: [
      "I'm Sughosh Dixit, a Data Scientist at Oracle working on Financial Crime & Compliance. I'm also passionate about music, football, and preserving our Bharatiya heritage!",
      "I'm a multi-talented professional with expertise in AI/ML, music, and sports. Currently working on cutting-edge financial crime detection systems.",
      "I wear multiple hats - Data Scientist by profession, Musician by passion, Footballer by heart, and Nationalist by conviction!"
    ],
    experience: [
      "I have 4+ years of experience in Data Science, currently working at Oracle on Financial Crime & Compliance systems. I've built ML models for fraud detection and led data extraction for Oracle Cloud HCM.",
      "My journey includes developing advanced analytics dashboards, building machine learning models, and working on anti-money laundering systems.",
      "I specialize in Python, SQL, Machine Learning, and Oracle Analytics. I've worked on projects ranging from fraud detection to workforce analytics."
    ],
    skills: [
      "My technical skills include Python, SQL, Machine Learning, Oracle Analytics, React, Node.js, and various AI/ML frameworks. I also have experience with cloud platforms and data visualization tools.",
      "I'm proficient in data science technologies like TensorFlow, Apache Spark, and Kafka. I also have frontend development skills with React and backend experience with Node.js.",
      "My skill set spans across Data Science (Python, ML, SQL), Web Development (React, Node.js), and Cloud Technologies (Oracle Cloud, AWS)."
    ],
    music: [
      "Music is my passion! I'm a devotional singer who loves preserving Bharatiya musical traditions. I perform weekly bhajans and patriotic songs, keeping our cultural heritage alive.",
      "I've been singing for over 10 years, focusing on spiritual and patriotic compositions. Music connects souls and preserves our cultural essence.",
      "I perform bhajans, patriotic songs, and classical music. Currently learning Vedas and expanding my repertoire of spiritual compositions."
    ],
    football: [
      "I'm a passionate striker with an offensive mindset and a devoted Liverpool FC fan! I've been playing football for over 15 years and love the strategic aspects of the game.",
      "Football teaches me that individual brilliance means nothing without team unity. I'm a Liverpool FC devotee and love analyzing the beautiful game.",
      "I play as a striker and believe in teamwork and strategy. Liverpool FC is my team, and I love both playing and analyzing football."
    ],
    nationalism: [
      "I'm a proud advocate of Bharatiya civilization and cultural heritage. I believe in rebuilding our sense of identity and preserving our ancient wisdom.",
      "True nationalism is about being proud of our magnificent heritage, not being against others. I work to eradicate colonial consciousness and promote our civilizational values.",
      "I'm devoted to preserving our Bharatiya heritage and promoting our civilizational wisdom. It's about celebrating who we are as a people."
    ],
    contact: [
      "You can reach me at sughoshpdixit@gmail.com or call me at +91-8310080859. I'm always open to discussing data science, music, or collaboration opportunities!",
      "Feel free to contact me via email or phone. I love connecting with fellow professionals, musicians, and anyone passionate about our culture!",
      "I'm available at sughoshpdixit@gmail.com or +91-8310080859. Let's connect and explore opportunities together!"
    ],
    projects: [
      "I've worked on several exciting projects including Printalytix (3D printing platform), Oracle Cloud HCM Analytics, Siemens Project Chanakya, Oracle Financial Crime & Compliance, and ML4AML (Machine Learning for Anti-Money Laundering).",
      "My key projects include developing fraud detection systems, workforce analytics dashboards, and AI-powered compliance monitoring platforms.",
      "I've built comprehensive platforms for 3D printing analytics, industrial automation lead generation, and financial crime detection using advanced ML algorithms."
    ],
    default: [
      "That's interesting! Could you tell me more about what specifically you'd like to know about Sughosh?",
      "I'd be happy to help! What aspect of Sughosh's work or interests would you like to explore?",
      "Great question! Feel free to ask about his experience, skills, projects, or interests in music, football, or culture."
    ]
  };

  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)];
    }
    if (lowerMessage.includes('about') || lowerMessage.includes('who')) {
      return botResponses.about[Math.floor(Math.random() * botResponses.about.length)];
    }
    if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job')) {
      return botResponses.experience[Math.floor(Math.random() * botResponses.experience.length)];
    }
    if (lowerMessage.includes('skill') || lowerMessage.includes('technolog')) {
      return botResponses.skills[Math.floor(Math.random() * botResponses.skills.length)];
    }
    if (lowerMessage.includes('music') || lowerMessage.includes('sing') || lowerMessage.includes('bhajan')) {
      return botResponses.music[Math.floor(Math.random() * botResponses.music.length)];
    }
    if (lowerMessage.includes('football') || lowerMessage.includes('liverpool') || lowerMessage.includes('sport')) {
      return botResponses.football[Math.floor(Math.random() * botResponses.football.length)];
    }
    if (lowerMessage.includes('nationalist') || lowerMessage.includes('culture') || lowerMessage.includes('heritage')) {
      return botResponses.nationalism[Math.floor(Math.random() * botResponses.nationalism.length)];
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      return botResponses.contact[Math.floor(Math.random() * botResponses.contact.length)];
    }
    if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
      return botResponses.projects[Math.floor(Math.random() * botResponses.projects.length)];
    }
    
    return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Button */}
      <button 
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat"
      >
        <div className="chat-icon">
          {isOpen ? (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
        <span className="chat-label">Ask me anything!</span>
      </button>

      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="bot-info">
            <div className="bot-avatar">🤖</div>
            <div className="bot-details">
              <h4>Sughosh's Assistant</h4>
              <span className="status">Online</span>
            </div>
          </div>
        </div>

        <div className="chatbot-messages">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.sender}`}>
              <div className="message-content">
                <p>{message.text}</p>
                <span className="message-time">{formatTime(message.timestamp)}</span>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="message bot">
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <div className="chatbot-input">
          <div className="input-container">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Sughosh's experience, skills, or interests..."
              className="message-input"
            />
            <button 
              onClick={handleSendMessage}
              className="send-button"
              disabled={!inputMessage.trim()}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;

import React from 'react';

const PricingSection = () => {
  return (
    <section className="pricing-section card" id="pricingSection">
      <div className="card__body">
        <h2>Choose The Perfect Learning Plan For You</h2>
        <p>Select the plan that best fits your learning goals and budget</p>
        
        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Free</h3>
              <p>Great for beginners — get access to all courses, a mock interview, and basic resume/profile tools to kickstart your tech career at zero cost.</p>
              <div className="pricing-price">
                <span className="price">Free Forever!</span>
              </div>
            </div>
            <div className="pricing-features">
              <ul>
                <li><i className="fas fa-check"></i> Resume Score with JD Matching</li>
                <li><i className="fas fa-check"></i> Basic Resume Building Tools</li>
                <li><i className="fas fa-check"></i> 1 AI-Powered Mock Interview</li>
                <li><i className="fas fa-check"></i> Access to All Courses</li>
                <li><i className="fas fa-check"></i> Basic Profile Improvement</li>
                <li><i className="fas fa-check"></i> Free Projects (30% Fee for Monetization)</li>
              </ul>
            </div>
            <button className="btn btn--primary btn--full-width">Start Learning Today</button>
          </div>
          
          <div className="pricing-card featured">
            <div className="pricing-badge">Most Popular</div>
            <div className="pricing-header">
              <h3>Pro</h3>
              <p>Ideal for serious learners — includes advanced resume help, two AI mock interviews, and a personal profile review call to boost job readiness.</p>
              <div className="pricing-price">
                <span className="currency">$</span>
                <span className="price">10</span>
                <span className="period">/mon</span>
              </div>
            </div>
            <div className="pricing-features">
              <ul>
                <li><i className="fas fa-check"></i> Advanced Resume Building</li>
                <li><i className="fas fa-check"></i> Detailed Resume Feedback</li>
                <li><i className="fas fa-check"></i> 2 AI-Powered Mock Interviews</li>
                <li><i className="fas fa-check"></i> Mid & Final Interview Progress Tracking</li>
                <li><i className="fas fa-check"></i> 1:1 Profile Optimization Call (15 min)</li>
                <li><i className="fas fa-check"></i> Access to Advanced PoCs</li>
                <li><i className="fas fa-check"></i> Reduced Platform Fee (20%)</li>
                <li><i className="fas fa-check"></i> Monthly Live Sessions with Experts</li>
              </ul>
            </div>
            <button className="btn btn--primary btn--full-width">Subscribe Now</button>
          </div>
          
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Premium</h3>
              <p>Best for committed professionals — offers weekly personalized support, detailed mock interview feedback, and exclusive, lower-fee PoC opportunities.</p>
              <div className="pricing-price">
                <span className="price">Coming soon</span>
              </div>
            </div>
            <div className="pricing-features">
              <ul>
                <li><i className="fas fa-check"></i> Full Resume Optimization</li>
                <li><i className="fas fa-check"></i> Expert Curated Resume Reviews</li>
                <li><i className="fas fa-check"></i> Weekly AI-Powered Mock Interviews</li>
                <li><i className="fas fa-check"></i> Detailed Insights</li>
                <li><i className="fas fa-check"></i> Weekly Personalized Progress Tracking</li>
                <li><i className="fas fa-check"></i> 1:1 Profile Optimization Call (30 min)</li>
                <li><i className="fas fa-check"></i> Exclusive PoC Opportunities</li>
                <li><i className="fas fa-check"></i> Lower Platform Fee (10%)</li>
                <li><i className="fas fa-check"></i> Weekly Live Sessions with Experts</li>
              </ul>
            </div>
            <button className="btn btn--outline btn--full-width">Join Waitlist</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 
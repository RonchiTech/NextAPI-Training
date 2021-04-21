import { useRef } from 'react';
function HomePage() {
  const emailRef = useRef();
  const feedbackRef = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredFeedback = feedbackRef.current.value;
    const reqBody = {
      email: enteredEmail,
      feedback: enteredFeedback,
    };
    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback</label>
          <textarea id="feedback" rows="5" ref={feedbackRef}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  );
}

export default HomePage;

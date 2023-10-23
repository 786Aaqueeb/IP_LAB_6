import React from 'react';
import { useLocation } from 'react-router-dom';

const Msg = () => {
  const location = useLocation();
  const message = location.state && location.state.message ? location.state.message : null;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Message</h2>
      <div style={styles.messageContainer}>
        {message ? <p style={styles.message}>{message}</p> : <p style={styles.noMessage}>{/*No message found.*/}Thank You for contacting me!</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh',
    // backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: '2.5em',
    color: '#333',
    marginBottom: '25px',
  },
  messageContainer: {
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  message: {
    fontSize: '1.1em',
    color: '#333',
  },
  noMessage: {
    fontSize: '1.1em',
    color: '#555',
  },
};

export default Msg;

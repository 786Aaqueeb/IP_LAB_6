import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Get to Know Me</h1>
        <hr style={styles.hr} />
        <p style={styles.paragraph}>
          Hi there! I'm <strong>Abhishek Jadhav</strong>, currently pursuing my passion for technology and creativity at VESIT. With an avid interest in photography, problem-solving, and crafting immersive online experiences, I strive to weave compelling visual narratives and innovative solutions. Join me on this journey of exploration and creativity.
        </p>
        <hr style={styles.hr} />
        <p style={styles.details}>
          <i>Roll no.</i> <strong>20</strong> | <i>Division:</i> <strong>D15B</strong> | <i>Branch:</i> <strong>Information Technology</strong>
        </p>
        <Link to="/Projects" style={styles.link}>
          <button style={styles.button}>View Projects</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
  },
  content: {
    textAlign: 'center',
    width: '50%',
  },
  heading: {
    fontSize: '2.5em',
    color: '#333',
    marginBottom: '10px',
  },
  hr: {
    width: '50%',
    borderTop: '2px solid #bbb',
  },
  paragraph: {
    fontSize: '1.2em',
    color: '#555',
    lineHeight: '1.6',
  },
  details: {
    fontSize: '1em',
    color: '#888',
    marginTop: '20px',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1.2em',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default About;

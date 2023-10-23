import React from 'react';
import { Link } from 'react-router-dom';
import Call from './Call';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Blood Donation Management System',
      description: 'A web-based Blood Donation Management System built with React, designed to facilitate efficient organization of blood donation camps. The system rewards donors with credits for their contributions, which can be redeemed for various incentives and goodies.',
    },
    {
      id: 2,
      title: 'Airline Reservation System',
      description: 'A comprehensive Airline Reservation System developed using React, designed to streamline the booking process for travelers and enhance the management of flight reservations for airline companies.',
    },
  ];

  return (
    <div style={styles.container}>
      <center>
        <h2 style={styles.heading}>Projects</h2>
        <hr style={styles.hr} />
      </center>
      <ul >
        {projects.map((project) => (
          <li key={project.id} style={styles.project}>
            <h3 style={styles.projectTitle}>{project.title}</h3>
            <p style={styles.projectDescription}>{project.description}</p>
          </li>
        ))}
      </ul><br /><br /><br />
      <Link to="/contact" >
          <button style={styles.button}>Contact Me</button>
        </Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    fontSize: '2.1em',
    color: '#333',
  },
  hr: {
    width: '100%',
    borderTop: '2px solid #bbb',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  project: {
    marginBottom: '20px',
  },
  projectTitle: {
    fontSize: '1.5em',
    color: '#333',
  },
  projectDescription: {
    fontSize: '1.1em',
    color: '#555',
  },
  contact: {
    marginTop: '30px',
  },
  contactme: {
    fontSize: '1.5em',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1.2em',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default Projects;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Call = (props) => {
    const [msg,setmsg]=useState('');

    const handlechange=(event)=>{
        setmsg(event.target.value);
    }

  return (
    <div style={styles.container}>
        <p style={styles.details}>
          My name is <strong>{props.name}</strong>.
          <br />
          My age is <strong>{props.age}</strong>.
          <br />
          My skills are <strong>{props.skill}</strong>.
          <br />
          Call me on <strong>{props.phone}</strong>.
          <br />
          Mail me at <a style={styles.mail} href={`mailto:${props.mail}`}>{props.mail}</a>.
        </p>
        <input
        style={styles.input}
        type="text"
        placeholder="Type your message here"
        value={msg}
        onChange={handlechange}
      />
      <Link to={{ pathname: "/Msg", state: { message: msg } }}>
        <button style={styles.button}>Click me</button>
      </Link>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'centre',
    width: '50%',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  details: {
    fontSize: '1.2em',
    color: '#333',
    textAlign: 'center',
  },
  mail: {
    color: '#007bff',
    textDecoration: 'none',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '20px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    boxSizing: 'border-box',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1.2em',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Call;

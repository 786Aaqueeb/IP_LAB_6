import React from 'react';
import Call from './Call';

const Contact = () => {
  return (
    <div >
        <center><h2 style={styles.contact}>Contact Me</h2></center><hr style={styles.hr}/><br /><br /><br /><br />
        <Call
          skill={"UI/UX Designing and Web-Development"}
          name={"Aaqueeb"}
          age={20}
          phone={"7499889852"}
          mail={"2021.aaqueeb.pinjari@ves.ac.in"}
        />
      </div>
  );
};
const styles = {
    hr: {
        width: '50%',
        borderTop: '2px solid #bbb',
        // paddingBottom: '10px',
    },
    contact: {
        paddingBottom: '10px',
    }
}
export default Contact;
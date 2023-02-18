import React from 'react';

const index = () => {
  return (
    <footer className="footer">
      <small>All rights reserved &copy; {new Date().getFullYear()}</small>
      <p><small>Developed with <span style={{color: 'red'}}>&#10084;</span> by <a className="a-link" rel="noreferrer" target="_blank" href="https://syedacodes.github.io/nehacodes/">ncodes</a></small></p>
    </footer>
  )
}

export default index;
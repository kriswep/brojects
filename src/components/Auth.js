import React from 'react'

const Auth = ({ onSubmit, onChange, onClick, authtoken }) => (
  <section>
    <form onSubmit={onSubmit}>
      <label htmlFor="authtoken">Please provide your auth token</label>
      <input
        id="authtoken"
        onChange={onChange}
        value={authtoken}
        />
    </form>
    <button
      onClick={onClick}
      >Get Stuff
    </button>
  </section>
)

export default Auth;

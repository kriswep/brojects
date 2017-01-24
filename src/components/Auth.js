import React from 'react'

const Auth = ({ onSubmit, onChange, authtoken }) => (
  <section>
    <form onSubmit={onSubmit}>
      <label htmlFor="authtoken">Please provide your auth token</label>
      <input
        id="authtoken"
        onChange={onChange}
        value={authtoken}
      />
    </form>
  </section>
)

export default Auth;

import React from 'react';
import { Button, Textfield } from 'react-mdl';

const Auth = ({ onSubmit, onChange, onClick, authtoken }) => (
  <section>
    <form onSubmit={onSubmit}>
      <Textfield
        label="Please provide your auth token"
        id="authtoken"
        onChange={onChange}
        value={authtoken}
        />
    </form>
    <Button raised colored ripple
      onClick={onClick}
      >Get Stuff
    </Button>
  </section>
)

export default Auth;

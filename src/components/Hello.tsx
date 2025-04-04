import React from 'react';

interface HelloProps {
  name?: string;
}

const Hello: React.FC<HelloProps> = ({ name = 'World' }) => {
  return (
    <div className="hello-container">
      <h2>Hello, {name}!</h2>
      <p>This is a federated module component.</p>
    </div>
  );
};

export default Hello; 
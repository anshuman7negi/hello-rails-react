import React from 'react'
import { useSelector } from 'react-redux';

const Greeting = () => {
  const { message, isLoading, error } = useSelector((store) => store.greetings);
  if (isLoading) {
    return (
      <h1>Loading</h1>
    );
  }
  if (error) {
    return (
      <h1>
        Something went wrong!
        { error }
      </h1>
    );
  }
  if (message) {
    return (
      <h1>{ message }</h1>
    );
  }
};

export default Greeting;
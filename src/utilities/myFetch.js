const myFetch = (answer) => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          resolve(answer);
        }, 
        1500
      );
    });
  };
  
export default myFetch;
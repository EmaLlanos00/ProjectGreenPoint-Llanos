const myFetch = (answer) => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          resolve(answer);
        }, 
        2000
      );
    });
  };
  
export default myFetch;
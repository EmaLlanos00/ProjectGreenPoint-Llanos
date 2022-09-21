const myFetch = (answer) => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          resolve(answer);
        }, 
        250
      );
    });
  };
  
export default myFetch;
export const getComments = () => {
    return async (dispatch) => {
      dispatch({ type: 'GET_COMMENTS' });
  
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
        const data = await response.json();
  
        dispatch({ type: 'GET_COMMENTS', payload: data });
      } catch (error) {
        console.log(error);
      }
    };
  };
  
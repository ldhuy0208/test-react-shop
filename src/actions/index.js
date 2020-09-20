export const increment = (num) => {

    return {
      type: "INCREMENT",
      number: num,
    };
};

export function fetchPost(posts){
  return {
    type: "FETCH_POST",
    payload: posts
  }
}
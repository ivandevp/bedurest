export const customFetch = (path, opts) => {
  return fetch(`${process.env.REACT_APP_API_URL}${path}`, opts)
}
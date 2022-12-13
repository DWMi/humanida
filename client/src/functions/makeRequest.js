export const makeRequest = async (
    url,
    method,
    body
  ) => {
    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });
      let result = await response.json();
      return result;
    } catch (err) {
      return err;
    }
  };
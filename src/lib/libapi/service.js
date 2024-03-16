export class APIRequest {
  get = async (url, headers) => {
    const result = await fetch(url, {
      method: 'GET',
    });
    if (!result.ok) {
      throw Error('Something went wrong');
    } else {
      return result.json();
    }
  };
}

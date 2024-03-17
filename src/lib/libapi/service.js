export class APIRequest {
  get = async url => {
    const result = await fetch(url, {
      method: 'GET',
    });
    if (!result.ok) {
      return {error: true, response: []};
    } else {
      const res = await result.json();
      return {error: false, response: res};
    }
  };
}

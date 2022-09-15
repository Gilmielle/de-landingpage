export async function sendFormData(data) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });
  const statusCode = String(response.status).charAt(0);

  if (statusCode === '2') {
    return response;
  }

  if (statusCode !== '2') {
    const err = new TypeError();
    err.errorMessages = {
      name: 'SomeError',
      message: 'Some error happened',
    };
    throw err;
  }

  throw new Error('Something went wrong...');
}

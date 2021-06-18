const apiUrl = (url: string): string => `${process.env.api}${url}`;

export function doPost<T>(url: string, payload: any): Promise<T> {
  return doFetch<T>(url, 'POST', payload);
}

export function doPut<T>(url: string, payload: any): Promise<T> {
  return doFetch<T>(url, 'PUT', payload);
}

export function doGet<T>(url: string): Promise<T> {
  return doFetch<T>(url);
}

function doFetch<T>(url: string, method = 'GET', payload: any = undefined): Promise<T> {
  const headers = { 'Content-Type': 'application/json' };
  const body = payload ? JSON.stringify(payload) : null;
  return new Promise((resolve, reject) => {
    fetch(apiUrl(url), { body, headers, method })
      .then(async res => {
        const result = await res.json();
        if (res.ok) {
          resolve(result);
        } else {
          reject(result);
        }
      })
      .catch(e => {
        console.log('api call failed on ', url, e);
        reject([]);
      });
  });
}


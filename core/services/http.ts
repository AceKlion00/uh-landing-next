const apiUrl = (url: string): string => `${process.env.api}${url}`;

export function doPost<T>(url: string, payload: any): Promise<T> {
  return new Promise((resolve, reject) => {
    fetch(apiUrl(url), {
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
    }).then(async res => {
      const result = await res.json();
      if (res.ok) {
        resolve(result);
      } else {
        reject(result);
      }
    })
  });
}

export function doGet<T>(url: string): Promise<T> {
  return fetch(apiUrl(url)).then(res => res.json());
}

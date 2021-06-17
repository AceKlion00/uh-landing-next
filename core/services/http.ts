export function doPost<T>(url: string, payload: any): Promise<T> {
  return new Promise((resolve, reject) => {
    fetch(url, {
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
  return fetch(url).then(res => res.json());
}

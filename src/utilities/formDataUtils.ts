export function createFormData<T>(data:T) {
  type newsKey = keyof typeof data;
  let formData = new FormData()
  Object.keys(data).forEach((key) => {
    const keyk = key as newsKey;
    const value = data[keyk]
    formData.append(key, value);
  });
  return formData;
}
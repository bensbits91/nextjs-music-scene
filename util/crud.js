export const fetcher = async (...args) => fetch(...args).then(res => res.json());

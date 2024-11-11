import API from './API'

const apiKey: string | undefined = import.meta.env.VITE_API_KEY;

export const getBooks = async (term: string, offset: number, limit: number, orderBy?: string) => {
  try {
    const response = await API.get('', {
      params: {
        q: term,
        startIndex: 12*offset,
        maxResults: limit,
        key: apiKey,
        orderBy,
      }
    })
    return response.data
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
}
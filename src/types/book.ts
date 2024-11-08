export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[]
    publishedDate: string;
    description: string;
    pageCount: string;
    categories: string[];
    averageRating: number;
    ratingsCount: number;
    imageLinks: {
      smallThumbnail: string;
      small: string;
    };
    language: string;
    previewLink: string;
  }
  saleInfo: {
    saleability: 'NOT_FOR_SALE' | 'FOR_SALE';
    listPrice: {
      amount: number,
      currencyCode: string
    }
  }
}
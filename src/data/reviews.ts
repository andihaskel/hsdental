/**
 * Google reviews.
 *
 * PENDING CONFIRMATION — do not invent ratings, counts, authors, or review text.
 * `status` stays "pending" until the values below are copied from the clinic's
 * real Google profile. The placeholder layout is the empty state from the design.
 *
 * Later this module can be replaced by an approved Google API or review provider
 * that returns the same `ReviewsContent` shape.
 */

export interface Review {
  id: string;
  author: string;
  /** ISO date, rendered in es-UY. */
  date: string;
  /** 1–5, as published on Google. */
  rating: number;
  text: string;
}

export interface ReviewsContent {
  status: 'pending' | 'verified';
  averageRating: number | null;
  reviewCount: number | null;
  googleReviewsUrl: string;
  reviews: Review[];
}

export const reviewsContent: ReviewsContent = {
  status: 'pending',
  averageRating: null,
  reviewCount: null,
  googleReviewsUrl:
    'https://www.google.com/maps/search/?api=1&query=Haskel%20Socolovsky%20Odontolog%C3%ADa%20Montevideo',
  reviews: [],
};

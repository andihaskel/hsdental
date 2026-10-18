/**
 * Google reviews.
 *
 * Review copy and metadata are transcribed from the clinic's Google profile.
 * The overall rating and total review count remain null until confirmed.
 *
 * Later this module can be replaced by an approved Google API or review provider
 * that returns the same `ReviewsContent` shape.
 */

export interface Review {
  id: string;
  author: string;
  /** Date label shown by Google when the review was transcribed. */
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
  status: 'verified',
  averageRating: null,
  reviewCount: null,
  googleReviewsUrl: 'https://maps.app.goo.gl/bnn5DmwuzrRA6hSp6',
  reviews: [
    {
      id: 'emanuel-maidana',
      author: 'Emanuel Maidana',
      date: 'Hace 5 meses',
      rating: 5,
      text: 'Excelente atención desde el día uno, desde la recepción hasta la Dra. Socolovsky excelentes profesionales. El trabajo que realizan es de calidad y la atención brindada siempre la adecuada. La Dra. siempre dispuesta a dar una solución ante cualquier tipo de urgencia. Recomiendo totalmente !',
    },
    {
      id: 'martin-alonzo',
      author: 'Martin Alonzo',
      date: 'Hace un año',
      rating: 5,
      text: 'Hace muchos años que me atiendo con ellos y siempre recibí una atención excelente. Son profesionales de confianza, muy amables y dedicados. Además de ser muy buenas personas, hacen que uno se sienta cómodo en cada consulta. Los recomiendo totalmente.',
    },
    {
      id: 'diego-acosta',
      author: 'Diego Acosta',
      date: 'Hace 11 meses',
      rating: 5,
      text: 'Desde que llegué me sentí muy bien atendido. El equipo es súper amable, el lugar está impecable y moderno, y los tratamientos se hacen con mucho cuidado. Se nota que les importa el bienestar del paciente. 100% recomendable para quien busque un buen dentista.',
    },
  ],
};

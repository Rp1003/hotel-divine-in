// TypeScript types for Google Places API responses

export interface GooglePlaceReview {
    author_name: string;
    author_url?: string;
    language?: string;
    profile_photo_url?: string;
    rating: number;
    relative_time_description: string;
    text: string;
    time: number;
}

export interface GooglePlaceDetails {
    name: string;
    rating: number;
    user_ratings_total: number;
    reviews?: GooglePlaceReview[];
    formatted_address?: string;
    formatted_phone_number?: string;
    website?: string;
    url?: string;
}

export interface GooglePlacesAPIResponse {
    result: GooglePlaceDetails;
    status: string;
}

// Frontend-friendly review type
export interface Review {
    name: string;
    location: string;
    rating: number;
    text: string;
    date: string;
    profilePhoto?: string;
}

export interface ReviewsData {
    averageRating: number;
    totalReviews: number;
    reviews: Review[];
}

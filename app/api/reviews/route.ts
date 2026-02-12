import { NextResponse } from 'next/server';
import type { GooglePlacesAPIResponse, ReviewsData, Review } from '@/types/google-places';

export const revalidate = 3600; // Revalidate every hour

export async function GET() {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    // Validate environment variables
    if (!apiKey || !placeId) {
        return NextResponse.json(
            {
                error: 'Missing API configuration. Please set GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID in .env.local',
                fallback: true
            },
            { status: 500 }
        );
    }

    try {
        // Fetch place details from Google Places API
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews,formatted_address&key=${apiKey}`;

        const response = await fetch(url, {
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!response.ok) {
            throw new Error(`Google API error: ${response.status}`);
        }

        const data: GooglePlacesAPIResponse = await response.json();

        if (data.status !== 'OK') {
            throw new Error(`Google API returned status: ${data.status}`);
        }

        const placeDetails = data.result;

        // Transform Google reviews to our frontend format
        const reviews: Review[] = (placeDetails.reviews || []).map(review => ({
            name: review.author_name,
            location: 'Google User', // Google API doesn't provide detailed location
            rating: review.rating,
            text: review.text,
            date: review.relative_time_description,
            profilePhoto: review.profile_photo_url
        }));

        const reviewsData: ReviewsData = {
            averageRating: placeDetails.rating || 0,
            totalReviews: placeDetails.user_ratings_total || 0,
            reviews: reviews
        };

        return NextResponse.json(reviewsData);

    } catch (error) {
        console.error('Error fetching Google reviews:', error);

        return NextResponse.json(
            {
                error: 'Failed to fetch reviews from Google',
                message: error instanceof Error ? error.message : 'Unknown error',
                fallback: true
            },
            { status: 500 }
        );
    }
}

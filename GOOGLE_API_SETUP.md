# Google Places API Setup Guide

This guide will help you set up the Google Places API to fetch real reviews and ratings for Hotel Divine Inn.

## Prerequisites
- A Google Cloud account
- A Google My Business listing for your hotel

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown at the top
3. Click "New Project"
4. Enter a project name (e.g., "Hotel Divine Inn Website")
5. Click "Create"

## Step 2: Enable the Places API

1. In the Google Cloud Console, go to **APIs & Services** > **Library**
2. Search for "Places API"
3. Click on "Places API"
4. Click the **Enable** button

## Step 3: Create API Credentials

1. Go to **APIs & Services** > **Credentials**
2. Click **Create Credentials** > **API Key**
3. Your API key will be created and displayed
4. **Important:** Click "Restrict Key" to secure it:
   - Under "Application restrictions", select "HTTP referrers (web sites)" or "IP addresses" based on your needs
   - Under "API restrictions", select "Restrict key" and choose "Places API"
5. Click **Save**
6. Copy your API key

## Step 4: Find Your Place ID

You need to find your hotel's Google Place ID. Use one of these methods:

### Method 1: Place ID Finder Tool
1. Go to [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Search for "Hotel Divine Inn Dwarka" (or your exact business name)
3. Click on the result to see the Place ID
4. Copy the Place ID

### Method 2: Google Maps
1. Search for your hotel on [Google Maps](https://maps.google.com)
2. Click on your business listing
3. Look at the URL - the Place ID is in the URL after `!1s`
4. Example: `https://www.google.com/maps/place/...!1s0x123abc:0x456def...`

### Method 3: Places API Text Search
Use this URL in your browser (replace YOUR_API_KEY with your actual key):
```
https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Hotel%20Divine%20Inn%20Dwarka&inputtype=textquery&fields=place_id,name&key=YOUR_API_KEY
```

## Step 5: Configure Environment Variables

1. Open the `.env.local` file in your project root
2. Add your credentials:

```env
GOOGLE_PLACES_API_KEY=your_actual_api_key_here
GOOGLE_PLACE_ID=your_actual_place_id_here
```

3. Save the file

**Important:** Never commit `.env.local` to version control. It's already in `.gitignore`.

## Step 6: Test the Integration

1. Start your development server:
```bash
npm run dev
# or
yarn dev
```

2. Navigate to `http://localhost:3000/reviews`
3. You should see your actual Google reviews and ratings

## Troubleshooting

### "Missing API configuration" error
- Make sure `.env.local` exists in your project root
- Verify that both `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID` are set
- Restart your development server after adding environment variables

### "Google API error: 403" or "REQUEST_DENIED"
- Check that the Places API is enabled in your Google Cloud project
- Verify your API key is correct
- Make sure your API key restrictions allow requests from your domain/IP

### No reviews showing
- Verify your Place ID is correct
- Check that your Google Business listing has reviews
- Look at the browser console for error messages

### Reviews are outdated
- The API caches results for 1 hour by default
- To force refresh during development, restart your dev server
- In production, reviews update automatically every hour

## API Usage and Costs

- Google Places API has a free tier with monthly credits
- Each API call costs a small amount after free credits are exhausted
- The app caches results for 1 hour to minimize API calls
- Check [Google Maps Platform Pricing](https://developers.google.com/maps/billing-and-pricing/pricing) for current rates

## Security Best Practices

✅ **Do:**
- Keep your API key in `.env.local`
- Use API key restrictions in Google Cloud Console
- Monitor your API usage in Google Cloud Console

❌ **Don't:**
- Commit `.env.local` to Git
- Share your API key publicly
- Use the same API key for multiple projects

## Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify your API key and Place ID
3. Review the Google Cloud Console for API errors
4. Check that billing is enabled if you've exceeded free tier limits

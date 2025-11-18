import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

// Security: Add a secret token to prevent unauthorized revalidation
const REVALIDATE_TOKEN = process.env.SANITY_REVALIDATE_SECRET || 'your-secret-token'

export async function POST(request: NextRequest) {
  try {
    // Verify the request is from Sanity
    const token = request.nextUrl.searchParams.get('token')
    if (token !== REVALIDATE_TOKEN) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
    }

    const body = await request.json()
    
    // Revalidate specific paths based on document type
    const documentType = body._type || body.document?._type
    
    switch (documentType) {
      // News content
      case 'news':
        // Revalidate news listing page
        revalidatePath('/news')
        // Revalidate home page (shows recent news)
        revalidatePath('/')
        // If we have the slug, also revalidate the specific news article page
        const newsSlug = body.slug?.current || body.document?.slug?.current
        if (newsSlug) {
          revalidatePath(`/news/${newsSlug}`)
        }
        break
        
      // FAQ content
      case 'faq':
        revalidatePath('/faq')
        // Revalidate home page (shows recent FAQs)
        revalidatePath('/')
        break
        
      // Career/Job listings
      case 'career':
        revalidatePath('/careers')
        break
        
      // Testimonials
      case 'testimonial':
        // Revalidate home page (shows testimonials)
        revalidatePath('/')
        break
        
      // Gallery albums
      case 'gallery':
        revalidatePath('/gallery')
        // If we have the slug, also revalidate the specific album page if it exists
        const gallerySlug = body.slug?.current || body.document?.slug?.current
        if (gallerySlug) {
          revalidatePath(`/gallery/${gallerySlug}`)
        }
        break
        
      default:
        // If document type is unknown, revalidate the home page as a fallback
        revalidatePath('/')
    }
    
    return NextResponse.json({ 
      revalidated: true, 
      documentType,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json({ 
      message: 'Error revalidating',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

// Optional: Allow GET requests for testing
export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token')
  const path = request.nextUrl.searchParams.get('path')
  
  if (token !== REVALIDATE_TOKEN) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
  }
  
  if (!path) {
    return NextResponse.json({ message: 'Path parameter required' }, { status: 400 })
  }
  
  try {
    revalidatePath(path)
    return NextResponse.json({ 
      revalidated: true, 
      path,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json({ 
      message: 'Error revalidating',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

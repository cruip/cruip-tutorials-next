import { ImageResponse } from 'next/server';
// App router includes @vercel/og.
// No need to install it.
 
export const runtime = 'edge';
 
export async function GET(request: Request) {
  const interBold = fetch(
    new URL('../../../public/Inter-Bold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer());

  const interExtrabold = fetch(
    new URL('../../../public/Inter-ExtraBold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer());

  try {
    const { searchParams } = new URL(request.url);
 
    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Default title';
 
    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage: 'url(https://cruip-tutorials-next.vercel.app/social-card-bg.jpg)',
            backgroundSize: '100% 100%',
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            fontFamily: 'Inter',
            padding: '40px 80px',
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontWeight: 800,
              letterSpacing: '-0.025em',
              lineHeight: 1,
              color: 'white',
              marginBottom: 24,
              whiteSpace: 'pre-wrap',
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: 'flex',
            }}           
          >
            <img
              width="44"
              height="44"
              src={`https://cruip-tutorials-next.vercel.app/author.jpg`}
              style={{
                borderRadius: 9999,
              }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 16,
              }}
            >
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: 'white',
                  whiteSpace: 'pre-wrap',
                  marginBottom: 4,
                }}          
              >
                Pasquale Vitiello
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: 'white',
                  opacity: 0.7,
                  whiteSpace: 'pre-wrap',
                }}
              >
                Co-Founder Cruip
              </div>          
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: await interBold,
            style: 'normal',
            weight: 700,
          },
          {
            name: 'Inter',
            data: await interExtrabold,
            style: 'normal',
            weight: 800,
          },
        ],        
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
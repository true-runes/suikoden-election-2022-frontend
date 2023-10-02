import { NextRequest, NextResponse } from 'next/server'

const middleware = (req: NextRequest) => {
  if (
    process.env.DEPLOYMENT_ENVIRONMENT === 'production' &&
    (req.page !== undefined && req.page.name !== '/usagisan')
  )
    return NextResponse.next()

  const basicAuth = req.headers.get('authorization')

  if (basicAuth) {
    const auth = basicAuth.split(' ')[1]
    const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')

    if (
      user === process.env.BASIC_AUTH_USERNAME &&
      pwd === process.env.BASIC_AUTH_PASSWORD
    ) {
      return NextResponse.next()
    }
  }

  return new Response('Auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}

export default middleware

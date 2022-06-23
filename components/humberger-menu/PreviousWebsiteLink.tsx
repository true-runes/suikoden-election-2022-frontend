export const PreviousWebsiteLink = (props: any) => {
  return (
    <div className="py-2">
      <a
        href={props.href}
        target="_blank"
        rel="noreferrer"
        className="link link-hover"
      >
        <div className="flex">
          <div className="pr-0 flex-auto">{props.siteName}</div>
          <div className="flex-initial w-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              style={{
                display: 'inline-block',
                verticalAlign: 'text-bottom',
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        </div>
      </a>
    </div>
  )
}

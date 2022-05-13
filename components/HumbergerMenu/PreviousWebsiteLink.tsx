const PreviousWebsiteLink = (props: any) => {
  return (
    <p className="py-2 pl-4">
      <a href={props.href} target="_blank" rel="noreferrer">
        {props.siteName}{' '}
      </a>
    </p>
  )
}

export default PreviousWebsiteLink

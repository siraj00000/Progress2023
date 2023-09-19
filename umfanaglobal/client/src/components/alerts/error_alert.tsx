type Props = {
  title: string
  message: string
}

const ErrorAlert = (props: Props) => {
  let isMessage = props.message === ''
  return (
    <div
      className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ${
        isMessage ? 'hidden' : ''
      }`}
      role="alert"
    >
      <strong className="font-bold">{props.title}</strong>
      <span className="block sm:inline ml-2">{props.message}</span>
    </div>
  )
}

export default ErrorAlert

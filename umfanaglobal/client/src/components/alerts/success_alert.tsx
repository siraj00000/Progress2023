type Props = {
  title: string
  message: string
}

const SuccessAlert = (props: Props) => {
  let isMessage = props.message === ''
  return (
    <div
      className={`bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative ${
        isMessage ? 'hidden' : ''
      }`}
      role="alert"
    >
      <strong className="font-bold">{props.title}</strong>
      <span className="block sm:inline ml-2">{props.message}</span>
    </div>
  )
}

export default SuccessAlert

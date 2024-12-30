
export default function PlaceHolder({text}: {text: string}) {
  return (
    <div className='my-8 mx-auto opacity-50'>
        <p className="text-center text-2xl font-semibold">{text}</p>
    </div>
  )
}

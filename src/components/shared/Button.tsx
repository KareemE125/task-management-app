type TButtonProps = {
    title: string;
    clickHandler?: (event: unknown) => void;
    isDisabled?: boolean;
    extraStyle?: string;
}

export default function Button({title, clickHandler, isDisabled, extraStyle = ''}:TButtonProps) {
  return (
    <button 
        type="submit"
        className={`px-8 py-2 font-semibold text-white rounded-lg ${isDisabled? ' bg-gray-400 dark:bg-gray-500' : ' bg-gradient-to-br '}
                  from-blue-700 to-teal-500 hover:from-blue-500 hover:to-teal-300 ${' '+extraStyle}`}
        onClick={clickHandler}
        disabled={isDisabled}
    >
        {title}
    </button>
  )
}

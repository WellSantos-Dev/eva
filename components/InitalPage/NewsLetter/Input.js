export const Input = ({id, name, error, onChange, setValue, ...props}) => {
  return (
    <>
      <input id={id} name={name} onChange={({ target }) => setValue(target.value)} {...props} className={`w-[100%] focus:outline-none sm:w-[278px] pl-[5px] pt-[10px] pb-[6px] rounded-sm invalid:border-pink-500 invalid:text-pink-600`}/>
    </>
  )
}
export default function Message() {
  const name = "Ian";

  if (name)
    return <h1 className='text-3xl text-orange-500 font-bold'>Hello {name}</h1>;

  return <h1 className='text-3xl font-bold'>Hello World!</h1>;
}

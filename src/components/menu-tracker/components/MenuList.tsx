import Modal from "../../Modal"

interface Menu {
  id: number
  item: string
  price: number
  category: string
}

interface Props {
  menu: Menu[]
  heading: string
  description: string
  onDelete: (id: number) => void
}

export default function MenuList({
  menu,
  heading,
  description,
  onDelete,
}: Props) {
  if (menu.length === 0) return null

  return (
    <div className=''>
      <div className='sm:flex sm:items-center'>
        <div className='sm:flex-auto'>
          <h1 className='text-xl font-semibold text-gray-900'>{heading}</h1>
          <p className='mt-2 text-sm text-gray-700'>{description}</p>
        </div>
        <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'>
          <Modal />
        </div>
      </div>
      <div className='mt-4 flex flex-col'>
        <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-300'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      Title
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      Role
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white'>
                  {menu.map((menuItem) => (
                    <tr key={menuItem.id}>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                        {menuItem.item}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                        ${menuItem.price}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                        {menuItem.category}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                        <button
                          onClick={() => onDelete(menuItem.id)}
                          className='text-red-500 hover:text-red-900'
                        >
                          Delete
                          <span className='sr-only'>, {menuItem.item}</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className='bg-gray-50'>
                  <tr>
                    <td className='px-5 py-3.5 text-left text-sm font-semibold text-gray-900'>
                      Total
                    </td>
                    <td className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
                      $
                      {menu
                        .reduce((acc, menuItem) => acc + menuItem.price, 0)
                        .toFixed(2)}
                    </td>
                    <td className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'></td>
                    <td className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

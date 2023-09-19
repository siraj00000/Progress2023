import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

type MultiSelectListboxComponentTypes = {
  itemsList: string[]
  type: string
  selectedItem: string[] | null
  updateSelectedItem: any 
}

export default function MultiSelectListboxComponent({
  type,
  itemsList,
  selectedItem,
  updateSelectedItem,
}: MultiSelectListboxComponentTypes) {
  const onChange = (e: any) => {
    updateSelectedItem(e)
  }
  let isEmpty = selectedItem === null || selectedItem.length === 0
  return (
    <div className="w-full">
      <Listbox onChange={onChange} multiple>
        <div className="relative my-1">
          <Listbox.Button className="relative w-full cursor-pointer text-left border border-gray-200 rounded appearance-none block h-full text-gray-700 py-3 px-4 leading-tight focus:outline-none focus:bg-white">
            <Fragment>
              {!isEmpty ? (
                <h6 className="truncate flex gap-2">
                  {selectedItem?.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="bg-amber-100 text-amber-900 p-1"
                    >
                      {item}
                    </span>
                  ))}
                </h6>
              ) : (
                <span className="block truncate ">select {type}</span>
              )}
            </Fragment>

            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 z-50 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {itemsList.length !== 0 &&
                itemsList.map((item, itemIdx) => (
                  <Listbox.Option
                    key={itemIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 z-50 ${
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                      }`
                    }
                    value={item}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

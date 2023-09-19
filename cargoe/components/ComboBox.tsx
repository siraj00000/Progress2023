'use client';
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { CompanyType } from "@/types/index.types";


const companyTypes: CompanyType[] = [
  { id: 1, name: "Shipper" },
  { id: 2, name: "Third Party Logistics (3PL)" },
  { id: 3, name: "Freight Forwarder" },
  { id: 4, name: "Asset Freight Forwarder" },
  { id: 5, name: "Motor Carrier" },
  { id: 6, name: "Air Carrier" },
  { id: 7, name: "Ocean Carrier" },
  { id: 8, name: "Non-Vessel Operating Common Carrier (NVOCC)" },
  { id: 9, name: "Courier" },
];

export default function ComboBoxComponent() {
  const [selected, setSelected] = useState();
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? companyTypes
      : companyTypes.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="w-full">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative">
          <div className="p-2 px-3 border border-activeTab rounded-xl bg-light text-secondary placeholder:text-secondary">
            <Combobox.Input
              required
              name="company_name"
              placeholder="Company Type"
              className="w-full border-none pl-3 pr-10 text-sm leading-5 text-gray-900 text-14 font-nunito400 focus:ring-0 placeholder:text-secondary"
              displayValue={(person: CompanyType) => person.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

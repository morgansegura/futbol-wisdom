export const enhanceDropdownUI = (
    field: any,
    input: any,
    meta: any,
    heading: string = "Default heading",
    label: string = "Default Label",
    description: string = "Description text."
) => (
    <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-200">
        {heading && (
            <h4 className=" font-sans text-lg font-semibold text-gray-700 whitespace-normal mb-2">
                {heading}
            </h4>
        )}
        <label className="block font-sans text-xs font-semibold text-gray-700 whitespace-normal mb-2">
            {label && label}
            {description && (
                <span className="block font-sans text-xs italic font-light text-gray-400 pt-0.5 whitespace-normal m-0">
                    {description}
                </span>
            )}
        </label>

        <input
            className="shadow-inner focus:shadow-outline focus:border-blue-500 focus:outline-none block text-base placeholder:text-gray-300 px-3 py-2 text-gray-600 w-full bg-white border border-gray-200 transition-all ease-out duration-150 focus:text-gray-900 rounded-md  undefined"
            {...input}
        />
    </div>
);

export const enhanceTextInputUI = (
    field: any,
    input: any,
    meta: any,
    heading: string = "Default heading",
    label: string = "Default Label",
    description: string = "Description text."
) => (
    <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-200">
        {heading && (
            <h4 className=" font-sans text-lg font-semibold text-gray-700 whitespace-normal mb-2">
                {heading}
            </h4>
        )}
        <label className="block font-sans text-xs font-semibold text-gray-700 whitespace-normal mb-2">
            {label && label}
            {description && (
                <span className="block font-sans text-xs italic font-light text-gray-400 pt-0.5 whitespace-normal m-0">
                    {description}
                </span>
            )}
        </label>

        <input
            className="shadow-inner focus:shadow-outline focus:border-blue-500 focus:outline-none block text-base placeholder:text-gray-300 px-3 py-2 text-gray-600 w-full bg-white border border-gray-200 transition-all ease-out duration-150 focus:text-gray-900 rounded-md  undefined"
            {...input}
        />
    </div>
);

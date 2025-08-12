export function InputBox({inputLabel, inputPlaceholder, inputType, onChange}){
  return <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    {inputLabel}
    <input type={inputType} placeholder={inputPlaceholder} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </label>
}

{/* <div class="mb-6">
    <label for="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default input</label>
    <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div> */}
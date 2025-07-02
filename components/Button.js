export default function Button(props) {
  return (
    <button 
      type="button" 
      className="px-4 py-2 bg-blue-500 text-white border-none rounded cursor-pointer transition-colors duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50" 
      {...props} 
    />
  )
}

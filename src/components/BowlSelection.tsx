export default function BowlSelection() {
  return (
    <div className="bg-zinc-800 rounded-[3rem] p-6 text-white w-full lg:w-1/4 flex flex-col items-center shadow-lg">

      {/* Circle number */}
      <div className="bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4 shrink-0">
        1
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold mb-6">Valitse rasia</h2>

      {/* Placeholder bowl rows */}
      <div className="h-12 border-2 border-gray-600 rounded-xl flex items-center px-4 w-full mb-3">
        Bowl placeholder
      </div>

      <div className="h-12 border-2 border-gray-600 rounded-xl flex items-center px-4 w-full mb-3">
        Bowl placeholder
      </div>

      <div className="h-12 border-2 border-gray-600 rounded-xl flex items-center px-4 w-full">
        Bowl placeholder
      </div>

    </div>
  )
}

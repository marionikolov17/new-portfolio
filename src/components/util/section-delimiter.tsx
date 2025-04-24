export default function SectionDelimiter({
  title,
  number,
}: {
  title: string;
  number: string;
}) {
  return (
    <div className="w-full flex items-center h-12 mb-8">
      <div className="flex items-end">
        <span className="text-blue-500 text-lg">{number}.</span>
        <h3 className="ms-6 text-xl sm:text-3xl text-primary-text-500 font-bold">
          {title}
        </h3>
      </div>
      <div className="grow md:grow-0 sm:w-64 h-[1px] ms-4 my-auto bg-gray-700"></div>
    </div>
  );
}

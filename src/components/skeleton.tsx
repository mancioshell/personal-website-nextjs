function SkeletonRow({ len }: { len: number }) {
  return Array.from({ length: len }).map((_, i) => (
    <>
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 md:w-[55rem] w-80 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 md:w-[48rem] w-80 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 md:w-[51rem] w-72 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 md:w-[53rem] w-80 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 md:w-[47rem] w-64 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 md:w-[50rem] w-80 mb-2.5"></div>
    </>
  ));
}

export default function Skeleton({title}: {title: string}) {
  return (
    <div
      className="flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md min-h-[60rem] md:min-h-[40rem]"
      id="skills"
      data-type="section"
    >
      <div role="status" className="max-w-screen-lg animate-pulse max-h-screen">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{title}</h2>
        <SkeletonRow len={5}></SkeletonRow>

        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

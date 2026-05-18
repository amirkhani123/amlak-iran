function SliceDiv({ text }) {
  return (
    <div className="flex w-full items-center gap-3 my-6  ">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-300 to-blue-400 dark:via-blue-600 dark:to-blue-700" />
      <p className="shrink-0 rounded-full   bg-transparent px-4 py-1 font-sahim font-semibold text-xl text-primary  ">
        {text}
      </p>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-blue-500 to-blue-400 dark:via-blue-600 dark:to-blue-700" />
    </div>
  );
}

export default SliceDiv;

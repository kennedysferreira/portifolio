interface CertificatesProps {
  technology: string;
  school: string;
  url: string;
}

export function Certificates({ technology, school, url }: CertificatesProps) {
  return (
    <div className="group relative flex h-6 justify-between items-center lg:hover:!opacity-100 lg:group-hover/list:opacity-50 transition-opacity duration-300">
      <div className="absolute -inset-x-4 -inset-y-4  rounded-md transition duration-300 lg:-inset-x-6 lg:group-hover:bg-white/5 lg:group-hover:shadow-[inset_0_1px_0_0_#94a3b829]" />
      <div className="space-x-2">
        <span className="text-slate-200">{technology}</span>
        <span className="border-r-[2px] border-slate-700 "></span>
        <span>{school}</span>
      </div>
      <a
        href={url}
        target="_blank"
        className="cursor-pointer hidden rounded-md text-sm z-10 py-1 px-2 text-slate-200 bg-indigo-500 hover:bg-indigo-600 group-hover:block group-hover:transition-transform "
      >
        Show Credentials
      </a>
    </div>
  );
}

import Skeleton from "react-loading-skeleton"

export default function PostPageLoader() {
  return (
    <article className="-mt-content-gap">
      <Skeleton height={250} width="100%" className="mb-5 md:mb-10" />

      <div className="container flex flex-col gap-5 md:gap-10 max-w-prose">
        <header className="flex flex-col gap-5">
          <Skeleton height={26} width="100%" />

          <div className="flex flex-col-reverse md:flex-row gap-2 justify-between">
            <div className="flex gap-2 items-center">
              <Skeleton circle height={24} width={24} />
              <span className="text-xs">
                <Skeleton width={100} height={12} />
              </span>
            </div>
            <Skeleton height={14} width={230} />
          </div>

          <div className="prose text-justify hyphens-auto leading-relaxed border-b border-b-[#e9e9e9] pb-5 opacity-60">
            <Skeleton height={16} width="100%" />
            <Skeleton height={16} width="100%" />
            <Skeleton height={16} width="100%" />
            <Skeleton height={16} width="75%" />
          </div>
        </header>

        <div className="flex flex-col gap-2">
          <Skeleton height={16} width="100%" />
          <Skeleton height={16} width="100%" />
          <Skeleton height={16} width="100%" />
          <Skeleton height={16} width="75%" />

          <br />

          <Skeleton height={16} width="100%" />
          <Skeleton height={16} width="100%" />
          <Skeleton height={16} width="100%" />
          <Skeleton height={16} width="75%" />

          <br />

          <Skeleton height={16} width="100%" />
          <Skeleton height={16} width="100%" />
          <Skeleton height={16} width="100%" />
          <Skeleton height={16} width="75%" />

          <br />

          <Skeleton height={16} width="100%" />
          <Skeleton height={16} width="100%" />
          <Skeleton height={16} width="100%" />
          <Skeleton height={16} width="75%" />

          <br />

          <Skeleton height={16} width="100%" />
          <Skeleton height={16} width="100%" />
          <Skeleton height={16} width="100%" />
          <Skeleton height={16} width="75%" />
        </div>
      </div>
    </article>
  )
}

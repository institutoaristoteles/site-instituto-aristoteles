import Skeleton from "react-loading-skeleton"
import { PostAuthorSkeleton } from "@/shared/components/post-author-badge"

export default function PostPageLoader() {
  return (
    <article className="-mt-content-gap">
      <Skeleton height={250} width="100%" className="mb-5 md:mb-10" />

      <div className="container flex flex-col gap-5 md:gap-10 max-w-prose">
        <header className="flex flex-col gap-5">
          <Skeleton height={26} width="100%" />

          <div className="flex flex-col-reverse md:flex-row gap-2 justify-between">
            <PostAuthorSkeleton />
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

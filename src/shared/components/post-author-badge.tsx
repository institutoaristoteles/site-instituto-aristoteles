import Image from "next/image"
import { memo, use } from "react"
import { Author } from "@/integration/types"
import { fetchAuthorById } from "@/integration/api"

function PostAuthorBadge({ authorId }: { authorId: string }) {
  const author = use<Author>(fetchAuthorById(authorId))

  return (
    <div className="flex gap-2 items-center">
      {author.avatar && (
        <Image
          src={author.avatar}
          alt=""
          width={40}
          height={40}
          className="rounded-full w-7 shadow"
        />
      )}
      <span className="text-xs">{author.name}</span>
    </div>
  )
}

export default memo(PostAuthorBadge)

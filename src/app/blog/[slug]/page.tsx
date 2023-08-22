export default function PostPage(props: { params: { slug: string } }) {
  return (
    <main>
      <div className="container">PostPage:{props.params.slug}</div>
    </main>
  )
}

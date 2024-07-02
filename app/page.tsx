import { PortfolioPieces } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <div className="my-8">
        <PortfolioPieces />
      </div>
    </section>
  )
}

import FeaturesGrid from './component/FeaturesGrid'

export const metadata = {
  title: 'Features Grid',
  description: 'Responsive features section with a 3-column grid of features and their descriptions.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Features Grid</h1>
      <FeaturesGrid />
    </section>
  )
}

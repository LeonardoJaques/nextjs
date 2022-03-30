type Props = {
  title: string
}
function HomePage({ title = 'React Avançado' }: Props) {
  return <div>{title}</div>
}
const foo = 'bla'
export default HomePage

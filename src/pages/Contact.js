import { useLocation } from "react-router-dom"

export default function Contact() {
  const queryString = useLocation().search
  console.log(queryString)

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get('name')

  return (
    <div>
      <h2>Hey {name}, contact us here...</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsum, doloribus maxime architecto ea minima recusandae ullam magni saepe. Unde natus fugit dolorum praesentium vero accusamus ipsam. Sint, earum necessitatibus.</p>
    </div>
  )
}

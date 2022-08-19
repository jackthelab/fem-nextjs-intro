import { NavBar } from "../src/components/navbar";

const Contact = ({ data }) => {

  const { name } = data;

  return (
    <div>
      <NavBar />
      <h1>Contact: {name}</h1>
    </div>
  )

}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/hello');
  const data = await res.json();

  return {
    props: {
      data
    }
  }
}

export default Contact;
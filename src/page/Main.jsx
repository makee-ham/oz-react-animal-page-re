import { data } from "../assets/data/data";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <ul>
      {data.map((el) => (
        <li key={el.id}>
          <Link to={`/detail/${el.id}`}>
            <img src={el.img} alt="동물좋아요" />
            <div>{el.name}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

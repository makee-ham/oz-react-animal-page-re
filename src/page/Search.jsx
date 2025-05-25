import { Link, useSearchParams } from "react-router-dom";
import { data } from "../assets/data/data";
import { getRegExp } from "korean-regexp";

export default function Search() {
  const [searchParams] = useSearchParams();
  const param = searchParams.get("animal");
  const reg = getRegExp(param);

  const filteredData = data.filter((el) => el.name.match(reg));

  return (
    <ul>
      {filteredData.map((el) => (
        <li key={el.id}>
          <Link to={`/detail/${el.id}`}>
            <img src={el.img} alt="살려줘" />
            <div>{el.name}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

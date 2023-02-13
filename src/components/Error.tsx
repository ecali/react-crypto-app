import "./error.css";
import { BiMessageError } from "react-icons/bi";
import {BiHomeSmile} from 'react-icons/bi';
import { Link } from "react-router-dom";

export const Error = (props: {home: boolean}) => {
  return (
    <div className="error-container">
      <div className="error-heading">
        <span className="red">
          <BiMessageError />
        </span>
        <h3>
          <span className="red">Sorry!</span> We have an error with Coingecko
        </h3>
      </div>
      <div className="error-body">
        <p>
        Sorry for this little inconvenience.
        </p>
        <p>
          We use Coingecko Free API, it has a rate limit of 10-50 calls/minute,
          and doesn't require API key.
        </p>
        <p>
          If you exceed that limit you will be blocked until the next 1 minute
          window.
        </p>
        <p>Reload the page after the time and you can see the magic happens </p>
      </div>
      {
        props.home ? <Link to='/'>
            <button className="button-home"><BiHomeSmile />HOME</button>
        </Link> : ''
      }
    </div>
  );
};

import React, { useState } from "react";
import "../componenrs/deconnexion.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutuser } from "../redux/actions/userActions";

const Deconnexion = () => {
  const { user } = useSelector((state) => state.userReducer);
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const handletoggle = () => {
    setToggle(!toggle);
  };
  const logoutFunc = () => {
    localStorage.removeItem("token");
    dispatch(logoutuser());
  };

  return (
    <div>
      <img
        style={{ width: "30px" }}
        src={
          user.image
            ? user.image
            : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEX///+ZmZn6+vqioqKUlJSXl5eQkJCOjo7m5uaKioqfn5/V1dW9vb2np6ft7e3Gxsb29vbf39+2trbS0tKsrKzExMTb29vLy8vr6+uxsbE203S4AAAHW0lEQVR4nO2dWberKgyAizIoDtU67f7/P3p1d/eeDg4EA9qa7+E+3LVOMRsISUjC6UQQBEEQBEEQBEEQBEEQBEEQBEEQBEEgUpRVl9ZaSBUPKCl0nXZVWWz9YQgEUZJq/otgj4jb/9RpEgVbf6Q1QdRl7E009iKo5CzrPlHKorzoeeGe5lNfPmvJBuWVKW4k3R2u2LX8lJnMG6aE2ew9zaRQrMm3/ngDyjqGzd7TTMZ1ubUACyRCwmfvaSalSLYWYoaKyVXi3ZCs2lqQCVptqDuXEFy3WwszQpRhzN8dmUVbC/RCkCqc+bsj1GVXZ0fC7fXnFJzvR+UUmUKXb0BlO7FzqpUHxDRC7kGrBhdMDfOK3H435iH+DnyEhxsbci3SETiN4JuejWeXK/SOPG8n4NWHgL2I160EdLwF/8HDTeQrvAk4iLjByehTwE1E9CvgBiL6FtC/iN4F9K1uNhDQr4iXLQTsRbz4EtCLJTOGL+umtRSQSyl0GIZaSGm5CKQXGzW3+rohcN9GeREEQZFH7RDyt/oZD55GEFp4E1ykr5GlKBUWMorQvb9ooWW4rMa+K6gsFqt7bVPBN6Ga1g9neIDHdWCjAAs476RbhAikW9smg27CpUALPMwjMpcCJtBVJZvF32ygIiqHcdQAuqSMjmiwAcHd6VOoHpWp0c+mQBHd6dMIuEaNdwx0dytX1zbQDzFeTdDV70rZQO1RaX5hXUJ/2ol9GmjYFPIa8OM1bBaFdqFsoNYMh2yWCKrDXFg2sE9gHBbGvUIPInwBE+AnAPUdVE87uD4F6lGRwXZKAFXUAltAqLbjy+baMw10J2KnFoEPZagznrsyJ0zHj2HjMwH1cQqo1xLjBjSga0hADsMbNdRigu6DWQLY4P3wZjb3IynYF8Y89UuoX8jhkc0zVEKFqWuu0E3C4TZHBZUQaFPMUgDH7nU5/EBO4DEuvIgNeJH6kRBxmcJjpD5WKaKvD/WbmB9Ng+hDQV0b5um0YBIrmtFZXDBYnPjwQSz2wjjgMPAA2GqzGAPLNgUbNAPOLe8bOBvRYht68J5uo+BsRIujuAe6gDKbQZA8fQslx8B6LrL6M1qo7DG0zdjQ49guvUNoFAktswpAV+52yQH9IBgCWg8OMf3BwcT7IBiOfmmbHgRIX26tx8AwvqGB0v8R5gE/i3LFPwkxlKmNzfY3vKnpBry1eByiQ5DQ7rD4xTBLa0UWGcpxAY2BPaJMTONqRU2RRUzvHbvj8IaOl1dRF68aAUHCdSUji1f50Ev8FzCuL1amWqJnDD0jESRcW3kneDfl4wTd6qIihSAh9MbiHRm2o5l7bbg+FTfehYRDefb51ecvziiF33uRcOglwJr2viPztmEr+hI8sh8J2W8WtJKCif6/tlnQ7+xKQidgSOimihkLDF26VemBGRjn4doTi8+z8tcxbJoVVqPgMtaX6q8K4ZWhKqG66FiuOfYx7FJr32I4IExc8HLF0YHiW1j6h5KlP8Zj/KSWxz+Kf2jl48swAeZEJVYmHIqPbxGn4domfJJoi5Ew4jSwWJsY9Etjd2ESNIPOAW17lFgbLF6qe4fQfP+98tO7iyDdjVPpBVs7al2qUgMzoVBi3ifILb5YnR9RQpoVId1bAI4LztavmpwBxsO5ezJXplxj5PAU5joV6f7Q+A4Yq2TevNgf6Q7Y9B5faKyMz9x46yMl1BjmYkj7U+KVHzP7Bi1P2MxuizGTIUujyAJaPo3RRkSulTe6rUHLiTLJaxPYLR0MSsYRa4MM0ggkdqF8vjyJiHWIy/mluGnlvyynECHmlxrknOHXkhkcUohV3Ut53hYpwcss5WJh5nkvLVM35YBLCg41V39hxTiZwuVJRP2zLmx7N20O5rc/snKbrXtC8mHemfXbkOueZm1TcLasKXNZtej13DP1h270zMCcrkGvP5y5vhCuFmm/TGdGRR9s2tN31uFgrjrYRRvlyb8mxhXeFNMb0cFgU/X46F7FI1MehpN6/Klt73AbTm5ER8ptoi8GyuXIFBPhBVd928bPREcm241xw81ZI6VxzYYWShgdclRCd9p71NdXLntvFWN/VIc920Y75cQuu+AFY/awwz5Ro72+MHJ2phmR0GWvr1Fl41tCt/3axnru+ZbQcc+9EcvGs4TuH4R406d+JfTQafetf6lXCX30L33LXFAjCV14vChvHz1o3+xTEbrkecH46SN8gF7QB+jnfYCe7Afoq3+AtxG+/32LA7xRcoB3Zk7f/1bQ6QDvPR3gza4DvLt2gLfzDvD+4en737A8HeAd0tP3vyV7OsB7wKfvf9N54Nvf5R749rfVBxKx8ujo//2uFMwIZb2ilwCPa/REIAfkDVMWjZ+EUKzZ3EQzJCivTMFmkit2Lfd2PsxSlBdtWqQtuNSXcj/2izFB1GVDNf6cmGKoyM+66KNm74kgSlJ9ay0g3kTr0WnywdL9oyirLq21kCoeUFLoOu2qT1yYBEEQBEEQBEEQBEEQBEEQBEEQBEEQe+Y/fY1lwV9EArIAAAAASUVORK5CYII="
        }
        alt="icon profile"
        onClick={() => handletoggle()}
      />
      <div
        id="subMenu"
        style={{ position: "absolute", zIndex: "1500" }}
        className={toggle ? "open-menu" : "sub-menu-wrap"}
      >
        <div className="sub-menu">
          <div className="user-info">
            <img src={user.image} alt="" />
            <h2>{user.name}</h2>
          </div>
          <hr />
          <a href="#" className="sub-menu-link">
            <img src={user.image} alt="" />
            <p>Edit profile</p>
            <span>{">"}</span>
          </a>
          <a href="#" className="sub-menu-link">
            <img
              src="https://w7.pngwing.com/pngs/828/543/png-transparent-computer-icons-service-technology-setting-miscellaneous-service-business-thumbnail.png"
              alt="setting"
            />
            <p>setting & Privacy</p>
            <span>{">"}</span>
          </a>
          <a href="#" className="sub-menu-link">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsTSlJr8sa9DG8h6_3M9PhSinXrsbA82vOVQ&s"
              alt="help"
            />
            <p>Help & support</p>
            <span>{">"}</span>
          </a>
          <a href="#" className="sub-menu-link">
            <img
              src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/logout-512.png"
              alt="logout"
            />

            <p onClick={() => dispatch(logoutFunc())}>logout</p>
            <span>{">"}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Deconnexion;

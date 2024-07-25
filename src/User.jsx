import { useState } from "react";
import UserClass from "./UserClass";

function User() {
  //Componets inside componets
  function UserProfile() {
    return (
      <div>
        <h1>Apple Componets</h1>
      </div>
    );
  }
  const [name, setName] = useState("");
  //Create OnClick Function
  function OnClickFunction() {
    let getName = "Hello Jitixa How are you!";
    setName(getName);
  }

  return (
    <div>
      <UserDetails
        name={"Jitixa"}
        email="kothiyajitixa@gmail.com"
        other={{ address: "Surat", postCode: 3029 }}
      />
      {/* <UserDetails name={"Ravi"} />
      <UserDetails name={"Benji"} /> */}
      {/* <UserClass /> */}
      <UserProfile />
      {/* <button onClick={() => alert("Hello jitixa")}>
        Click Me With Arrow Function
      </button> */}
      <h2>{name}</h2>
      <button onClick={OnClickFunction}>Click Me</button>
    </div>
  );
}

function UserDetails(props) {
  return (
    <div
      style={{
        backgroundColor: "skyblue",
        margin: 20,
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <h1>Hello ! {props.name}</h1>
      <h2>Email : {props.email}</h2>
      <h4>
        Address : {props.other.address} - PostCode :{props.other.postCode}
      </h4>
    </div>
  );
}
export default User;

import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { FooterWarning } from "../components/FooterWarning";
import axios from "axios";
import { DB_URL } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router";

export function Signup() {
  const [fistName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const titleName = "Signup";
  const subHeading = "Enter your information to create an account";
  const warningMessage = "Already have an account";

  const handleSubmit = async () => {

    await axios
      .post(`${DB_URL}/api/v1/user/signup`, {
        firstName: fistName,
        lastName: lastName,
        userName: userName,
        password: password,
      })
      .then(function (response) {
        // console.log(response);
        localStorage.setItem("token", response.data.token)
        navigate("/dashboard")
      })
      .catch(function (error) {
        alert(error.response.data.msg)
      });    
    
  };

  return (
    <div className="border-2 border-black-500  bg-amber-300 p-4 rounded-lg shadow-md flex items-center justify-center">
      <Heading headingTitle={titleName}></Heading>

      <SubHeading subHeadingTitle={subHeading}></SubHeading>

      <InputBox
        onChange={(e) => setFirstName(e.target.value)}
        inputLabel={"Fist Name"}
        inputPlaceholder={"John"}
        inputType={"text"}
      ></InputBox>

      <InputBox
        onChange={(e) => setLastName(e.target.value)}
        inputLabel={"Last Name"}
        inputPlaceholder={"Doe"}
        inputType={"text"}
      ></InputBox>

      <InputBox
        onChange={(e) => setUsername(e.target.value)}
        inputLabel={"Email"}
        inputPlaceholder={"john@gmail.com"}
        inputType={"text"}
      ></InputBox>

      <InputBox
        onChange={(e) => setPassword(e.target.value)}
        inputLabel={"Password"}
        inputPlaceholder={"John@123456"}
        inputType={"password"}
      ></InputBox>

      <Button onClick={handleSubmit} buttonName={"Submit"}></Button>

      <FooterWarning
        warning={warningMessage}
        ref={"/signin"}
        anchorText={"Signin"}
      ></FooterWarning>
    </div>
  );
}

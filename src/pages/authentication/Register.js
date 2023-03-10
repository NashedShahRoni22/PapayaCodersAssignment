import Head from "next/head";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Lottie from "lottie-react";
import loginAnimation from "../../anim/form-registration.json";
import Link from "next/link";
const style = {
  height: 400,
};

const Register = () => {
  return (
    <>
      <Head>
        <title>Registration Now</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container py-5 my-5">
        <section className="row row-cols-lg-2">
          <Form className="shadow p-4 rounded">
            <div className="mb-5">
              <h3 className="blue-header">Create a new account</h3>
              <span className="fw-bold">
                Already registered?{" "}
                <Link href={"/authentication/Login"}>Login now</Link>
              </span>
            </div>
            
            <div className="row row-cols-2">
            <div class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect01">
              Role
              </label>
              <select class="form-select" id="inputGroupSelect01">
                <option value="1">Consumer</option>
                <option value="2">Company</option>
              </select>
            </div>
            <div class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect01">
              Reference
              </label>
              <select class="form-select" id="inputGroupSelect01">
                <option value="1">Photographer</option>
                <option value="2">Videographer</option>
                <option value="2">Twitter</option>
                <option value="2">Linkedin</option>
                <option value="2">Instagram</option>
              </select>
            </div>
              <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Enter phone number" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Enter Country" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCity">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter City" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicState">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="Enter State" />
              </Form.Group>
            </div>

            <button className="explore-now fw-bold w-100" type="submit">
              Register Now
            </button>
          </Form>
          <div>
            <Lottie animationData={loginAnimation} style={style} />
          </div>
        </section>
      </section>
    </>
  );
};

export default Register;

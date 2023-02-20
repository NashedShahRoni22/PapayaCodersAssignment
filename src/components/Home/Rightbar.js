import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";

const questions = [
  {
    ques: "How is my image retouched?",
    ans: "All images are professionally retouched by our team of expert touch-up artists.",
  },
  {
    ques: "What types of photo editing can you do?",
    ans: "We offer a wide range of photo editing services including basic retouching, color correction, background removal, and more.",
  },
  {
    ques: "Can I request a quote?",
    ans: "Yes, you can reach out to us for a quote by sending us an email or filling out the contact form on our website.",
  },
  {
    ques: "What if I am not satisfied with my edited photo?",
    ans: "In the unlikely event that you are not satisfied with the result, we offer free revisions until you are completely satisfied with the final product.",
  },
  {
    ques: "Can I change my instructions after submitting my order?",
    ans: "Yes, you can update your instructions at any time by reaching out to us.",
  },
  {
    ques: "Do you offer a free trial of your services?",
    ans: "Yes, we offer a free trial of our services to new customers.",
  },
  {
    ques: "Are my orders secure?",
    ans: "Yes, all orders are secure and confidential.",
  },
  {
    ques: "Are your products guaranteed?",
    ans: "Yes, we offer a satisfaction guarantee for all of our services.",
  },
  {
    ques: "How can I pay for my order?",
    ans: "We accept various payment methods including credit card, PayPal, and bank transfer.",
  },
  {
    ques: "How can I contact you if I have more questions?",
    ans: "You can reach out to us via email or by filling out the contact form on our website.",
  },
];

const Rightbar = () => {
  return (
    <section>
      <div className="d-flex flex-column align-items-center my-5 shadow p-4 rounded fw-bold">
        <p>Capturing Wow</p>
        <Link href={"/"}>Advertisement</Link>
        <p>Luv Israni</p>
        <Link href={"/"}>Advertisement</Link>
        <p>Capturing Wow</p>
        <Link href={"/"}>Advertisement</Link>
      </div>

      <img src="" alt="" />

      <div>
        <h3 className="pink-header">Frequently Asked Question!</h3>

        {questions.map((q, i) => (
          <Accordion key={i} className="my-2">
            <Accordion.Item eventKey={i}>
              <Accordion.Header>{i+1}. {q.ques}</Accordion.Header>
              <Accordion.Body className="advertise-header">{q.ans}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default Rightbar;

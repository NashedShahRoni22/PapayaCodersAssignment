import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});
const SatisfiedClient = () => {
  const clientsNum = 1000;
  const teamNum = 24;
  const salesNum = 10000;
  const worldsClientNum = 500;
  return (
    <div className="my-5">
      <h4 className="blue-header">Our Achivements</h4>
      <div className="my-3">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
          <div className="col">
            <div className="client-box rounded shadow px-5 py-2 text-center">
              <div className="fw-bold d-flex flex-column align-items-center">
                <span className="title">
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={clientsNum}
                    fontStyle={{ fontSize: 40 }}
                    configs={[
                      { mass: 1, tension: 220, friction: 100 },
                      { mass: 1, tension: 180, friction: 130 },
                      { mass: 1, tension: 280, friction: 90 },
                      { mass: 1, tension: 180, friction: 135 },
                      { mass: 1, tension: 260, friction: 100 },
                      { mass: 1, tension: 210, friction: 180 },
                    ]}
                  />
                </span>
                <p>Satisfied Client</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="client-box rounded shadow px-5 py-2 text-center">
              <div className="fw-bold d-flex flex-column align-items-center">
                <span className="title">
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={teamNum}
                    fontStyle={{ fontSize: 40 }}
                    configs={[
                      { mass: 1, tension: 220, friction: 100 },
                      { mass: 1, tension: 180, friction: 130 },
                      { mass: 1, tension: 280, friction: 90 },
                      { mass: 1, tension: 180, friction: 135 },
                      { mass: 1, tension: 260, friction: 100 },
                      { mass: 1, tension: 210, friction: 180 },
                    ]}
                  />
                </span>
                <p>
                  Expert Support <br /> Team
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="client-box rounded shadow px-5 py-2 text-center">
              <div className="fw-bold d-flex flex-column align-items-center">
                <span className="title">
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={clientsNum}
                    fontStyle={{ fontSize: 40 }}
                    configs={[
                      { mass: 1, tension: 220, friction: 100 },
                      { mass: 1, tension: 180, friction: 130 },
                      { mass: 1, tension: 280, friction: 90 },
                      { mass: 1, tension: 180, friction: 135 },
                      { mass: 1, tension: 260, friction: 100 },
                      { mass: 1, tension: 210, friction: 180 },
                    ]}
                  />
                </span>
                <p>
                  Sales <br /> Count
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="client-box rounded shadow px-5 py-2 text-center">
              <div className="fw-bold d-flex flex-column align-items-center">
                <span className="title">
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={worldsClientNum}
                    fontStyle={{ fontSize: 40 }}
                    configs={[
                      { mass: 1, tension: 220, friction: 100 },
                      { mass: 1, tension: 180, friction: 130 },
                      { mass: 1, tension: 280, friction: 90 },
                      { mass: 1, tension: 180, friction: 135 },
                      { mass: 1, tension: 260, friction: 100 },
                      { mass: 1, tension: 210, friction: 180 },
                    ]}
                  />
                </span>
                <p>Worldwide Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatisfiedClient;

import React from "react";
import "animate.css";
import { Container, Row, Col, ProgressBar, Card } from "react-bootstrap";

const skills = [
  {
    name: "HTML",
    level: 95,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    bg: "orange",
  },
  {
    name: "CSS",
    level: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    bg: "blue",
  },
  {
    name: "JavaScript",
    level: 35,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    bg: "yellow",
  },
  {
    name: "React",
    level: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    bg: "cyan",
  },
  {
    name: "Bootstrap",
    level: 85,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    bg: "purple",
  },
  {
    name: "PHP",
    level: 50,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    bg: "indigo",
  },
  {
    name: "MySQL",
    level: 60,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    bg: "blue",
  },
];

const SkillCard = ({ skill, index }) => {
  return (
    <Card
      className={`text-center mb-3 skill-card-dark border-0 rounded-4 animate__animated animate__fadeInUp`}
      style={{
        width: "100%",
        maxWidth: window.innerWidth < 576 ? "200px" : "250px", // أصغر على الهواتف
        minHeight: "300px",
        background: "#1f1f1f",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.4)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        animationDelay: `${index * 0.1}s`, // تأخير تدريجي
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.boxShadow = `0 15px 30px rgba(${
          skill.bg === "orange" ? "255, 165, 0" :
          skill.bg === "blue" ? "0, 0, 255" :
          skill.bg === "yellow" ? "255, 255, 0" :
          skill.bg === "cyan" ? "0, 255, 255" :
          skill.bg === "purple" ? "128, 0, 128" :
          skill.bg === "indigo" ? "75, 0, 130" : "0, 0, 255"
        }, 0.5)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.4)";
      }}
    >
      <Card.Body className="d-flex flex-column align-items-center justify-content-between">
        <img
          src={skill.icon}
          alt={skill.name}
          style={{ width: 70, height: 70, objectFit: "contain", marginBottom: 20 }}
          loading="lazy"
        />
        <Card.Title className="mb-3 fw-bold text-white" style={{ fontSize: "1.5rem" }}>
          {skill.name}
        </Card.Title>
        <ProgressBar
          now={skill.level}
          label={`${skill.level}%`}
          style={{
            height: "1.4rem",
            fontSize: "0.85rem",
            backgroundColor: "#333",
            width: "100%",
          }}
          className={`my-3 rounded-pill bg-${skill.bg}`}
        />
        <Card.Text
          className="fw-medium text-white mt-2"
          style={{ fontSize: "0.9rem", textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)" }}
        >
          مستوى الإتقان
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

const Skills3D = () => {
  return (
    <section
      id="skills"
      className="py-5"
      style={{
        background: "transparent",
        borderTop: "1px solid #333",
      }}
    >
      <Container>
        <h2
          className="text-center mb-5 animate__animated animate__fadeIn fw-bold text-light"
          style={{ fontSize: "2.5rem" }}
        >
          مهاراتي البرمجية
        </h2>
        <Row className="g-2 justify-content-center">
          {skills.map((skill, idx) => (
            <Col
              key={idx}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="d-flex justify-content-center"
            >
              <SkillCard skill={skill} index={idx} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills3D;
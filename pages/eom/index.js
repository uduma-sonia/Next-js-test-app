import styles from "../../styles/EOM.module.css";
import { Toolbar } from "../../components/toolbar";
import Button from "../../components/button";

export const EOM = ({ employee }) => {
  console.log(employee);
  return (
    <div className="page-container">
      <Toolbar />

      <div className={styles.main}>
        <h1>Employee of The Month</h1>

        <div className={styles.employeeOfTheMonth}>
          <h3>{employee.name}</h3>
          <h6>{employee.position}</h6>
          <img src={employee.image} />
          <p>{employee.description}</p>
        </div>

        <Button
          height={35}
          title="SUBMIT BUTTON"
          color="#111111"
          mt={10}
          mb={10}
          br={8}
          pd={20}
          main
          height={50}
        />
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiRes = await fetch(
    "https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth"
  );

  const employee = await apiRes.json();
  return {
    props: {
      employee,
    },
  };
};

export default EOM;

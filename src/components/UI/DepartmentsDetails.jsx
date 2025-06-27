import { useParams } from "react-router-dom";
import { departments } from "../../api/data";
const DepartmentsDetails = () => {
  const { id } = useParams();

  // Simulating fetching data based on the id

  // This is where you would typically fetch data from an API
  console.log(departments);

  const department = departments.find((dept) => dept.id === parseInt(id));
  if (!department) {
    return <div>Department not found</div>;
  }
  return (
    <div>
      <h1>Department Details</h1>

      <div key={department.id}>
        <h2>{department.name}</h2>
        <p>{department.description}</p>
      </div>
    </div>
  );
};

export default DepartmentsDetails;

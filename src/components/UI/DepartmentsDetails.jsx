import { useParams, Link } from "react-router-dom";
import { departments } from "../../api/data";

const DepartmentDetail = () => {
  const { id } = useParams();
  const dept = departments.find((d) => d.id === parseInt(id));
  if (!dept)
    return <div className="text-center py-20">Department not found.</div>;

  const Icon = dept.icon;
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <Link
        to="/departments"
        className="text-green-600 hover:underline mb-4 inline-block"
      >
        &larr; Back to Departments
      </Link>
      <div className="bg-white rounded-2xl shadow-xl border border-green-100 overflow-hidden">
        <div className="relative h-56 w-full">
          <img
            src={dept.image}
            alt={dept.name}
            className="object-cover w-full h-full"
          />
          <div className="absolute top-4 left-4 bg-white/80 rounded-full p-3 shadow">
            <Icon className="text-3xl text-green-700" />
          </div>
        </div>
        <div className="p-8">
          <h1 className="text-3xl font-bold text-green-700 mb-2">
            {dept.name}
          </h1>
          <p className="text-gray-600 mb-4">{dept.description}</p>
          <h2 className="text-lg font-semibold mb-2">Key Features</h2>
          <ul className="flex flex-wrap gap-2">
            {dept.features.map((feature, i) => (
              <li
                key={i}
                className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full font-medium"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetail;

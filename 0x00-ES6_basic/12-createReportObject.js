export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(employeeslist) {
      return Object.keys(employees).length;
    },
  };
}
